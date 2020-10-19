---
title: Oil Deposits
date: 2015-12-31
tags: algorithm
---

# 题目描述

> Oil Deposits

> Time Limit: 2000/1000 MS (Java/Others) Memory Limit: 65536/32768 K (Java/Others)
> Total Submission(s): 13887 Accepted Submission(s): 7985

### Problem Description

> The GeoSurvComp geologic survey company is responsible for detecting underground oil deposits. GeoSurvComp works with one large rectangular region of land at a time, and creates a grid that divides the land into numerous square plots. It then analyzes each plot separately, using sensing equipment to determine whether or not the plot contains oil. A plot containing oil is called a pocket. If two pockets are adjacent, then they are part of the same oil deposit. Oil deposits can be quite large and may contain numerous pockets. Your job is to determine how many different oil deposits are contained in a grid.

### Input

> The input file contains one or more grids. Each grid begins with a line containing m and n, the number of rows and columns in the grid, separated by a single space. If m = 0 it signals the end of the input; otherwise 1 <= m <= 100 and 1 <= n <= 100. Following this are m lines of n characters each (not counting the end-of-line characters). Each character corresponds to one plot, and is either \*, representing the absence of oil, or @, representing an oil pocket.

### Output

> For each grid, output the number of distinct oil deposits. Two different pockets are part of the same oil deposit if they are adjacent horizontally, vertically, or diagonally. An oil deposit will not contain more than 100 pockets.

# 概述题目

> 大概说一下题目的大概意思吧，我说的不是最好的，还请高手来指点羡慕！！！！

    题目的大概意思是：
    给你一块地图 ，其中' @ '代表探测到有油的地方， 而' * '则是代表没有油的地方。
    现在题目给出了油田的定义，所有连在一起的' @ ' 代表一个油田， 而连在一起的定义是有公共点或公共边。
    而题目的要求是输出给你一张地图上的油田的个数。
    思路： 这个题没什么特别的思路， 就是找到一个初始的' @ ', 然后遍历一遍，把与他属于同一个油田的都标记了，或者清楚。

# 代码实现：

```c
    #include <stdio.h>
    #include <queue>
    using namespace std;
    char map[101][101];                             // 题目的要求是  1<=n<=100 1<=m<=100 保险起见
    int n, m;
    int dir[8][2]={{0,-1},{0,1},{-1,0},{1,0},{-1,-1},{1,-1},{-1,1},{1,1}};//方向数组  上下左右 左上右上左下右下
    typedef struct
    {
        int x,y;                                    //定义结构体  保存坐标
    }node;
    void _bfs(int i, int j)
    {
        node fir;                                    //初始的 x,y
        fir.y=i;
        fir.x=j;
        queue<node>q;
        q.push(fir);                                //入初队
        while (!q.empty())
        {
            fir=q.front();                             //取出队首
            q.pop();
            for (int i=0; i<8; i++)
            {
                node tmp;
                tmp.x=fir.x+dir[i][0];
                tmp.y=fir.y+dir[i][1];
                if (tmp.x<0||tmp.y<0||tmp.x>=m||tmp.y>=n) continue ;   //判断是否越界
                if (map[tmp.y][tmp.x]=='@')
                {
                    q.push(tmp);                                   //  如果是有油的地方  将其入队
                    map[tmp.y][tmp.x]='*';                        //  标记走过的地方
                }
            }
        }
        return ;
    }
    int main()
    {
        while (~scanf("%d%d", &n,&m) &&!(!n&&!m))
        {
            int num=0;                                  //记录有多少个油田
            for (int i=0; i<n; i++)
            scanf("%s", map[i]);                    //输入油田
            for (int i=0; i<n; i++)
            {
                for (int j=0; j<m; j++)
                if (map[i][j]=='@')
                {
                    num++;                            //油田数目自加一个
                    _bfs(i,j);                        //清除||标记与他相关的有油的地方
                }
            }
            printf("%d\n", num);
        }
        return 0;
    }
```
