---
title: Write a mock test for spring controller
date: 2015-12-28
tags: essay
---

### Controller

```java
package com.brainysoon.zkeps.web;

import com.brainysoon.zkeps.data.KepsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * Created by ken on 16-10-13.
 */
@Controller
@RequestMapping("/keps")
public class KepsController {

    private KepsRepository kepsRepository;

    @Autowired
    public void setKepsRepository(KepsRepository kepsRepository) {

        this.kepsRepository = kepsRepository;
    }

    @RequestMapping(method = RequestMethod.GET)
    public String keps(@RequestParam(value = "max", defaultValue = "1") long max,
                       @RequestParam(value = "count", defaultValue = "20") long count,
                       Model model) {

        model.addAttribute("keps", kepsRepository.findKeps(max, count));

        return "keps";
    }
}
```

### Repository 接口

```java
package com.brainysoon.zkeps.data;

import com.brainysoon.zkeps.bean.Kep;

import java.util.List;

/**
 * Created by ken on 16-10-13.
 */
public interface KepsRepository {

    //获得一定数量的帖子
    List<Kep> findKeps(long max, long count);

    //得到一个帖子
    Kep findOne(long kepId);
}
```

### 测试类 TestKepsController

```java
package com.brainysoon.zkeps.web;

import com.brainysoon.zkeps.bean.Kep;
import com.brainysoon.zkeps.data.KepsRepository;
import com.brainysoon.zkeps.data.MockKepsRepository;
import org.junit.Test;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.model;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.standaloneSetup;

/**
 * Created by ken on 16-10-13.
 */
public class TestKepsController {

    @Test
    public void testKeps() throws Exception {

        KepsController kepsController = new KepsController();

        List<Kep> keps = createKeps(3, 20);

        KepsRepository kepsRepository = mock(KepsRepository.class);     //MockRepository

        when(kepsRepository.findKeps(3, 20)).thenReturn(keps);

        kepsController.setKepsRepository(kepsRepository);

        MockMvc mockMvc = standaloneSetup(kepsController)               //MockSpringMvc
                .setViewResolvers(new WebConfig().viewResolver()).build();

        mockMvc.perform(get("/keps?&max=3&count=20")).andExpect(view().name("keps"))    //SpringExpect
                .andExpect(model().attributeExists("keps"))
                .andExpect(model().attribute("keps", keps));
    }

    public List<Kep> createKeps(long max, long count) {

        List<Kep> keps = new ArrayList<>();

        for (long i = max; i <= max + count; i++) {

            keps.add(new Kep(i, "第" + i + "条帖子", new Date(), "用户:" + i));
        }

        return keps;
    }
}
```

### [GitHub 项目地址](https://github.com/brainysoon/ZKeps)
