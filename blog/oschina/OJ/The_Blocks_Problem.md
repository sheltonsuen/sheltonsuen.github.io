# 题目描述

### Background

> Many areas of Computer Science use simple, abstract domains for both analytical and empirical studies. For example, an early AI study of planning and robotics (STRIPS) used a block world in which a robot arm performed tasks involving the manipulation of blocks.

> In this problem you will model a simple block world under certain rules and constraints. Rather than determine how to achieve a specified state, you will ``program'' a robotic arm to respond to a limited set of commands.

### The Problem

> The problem is to parse a series of commands that instruct a robot arm in how to manipulate blocks that lie on a flat table. Initially there are n blocks on the table (numbered from 0 to n-1) with block bi adjacent to block bi+1 for all 0 <= i < n-1 as shown in the diagram below:

> ![输入图片说明](https://static.oschina.net/uploads/img/201609/27180920_UM4Z.gif '在这里输入图片标题')

> Figure: Initial Blocks World

> The valid commands for the robot arm that manipulates blocks are:

> move a onto b

> where a and b are block numbers, puts block a onto block b after returning any blocks that are stacked on top of blocks a and b to their initial positions.

> move a over b

> where a and b are block numbers, puts block a onto the top of the stack containing block b, after returning any blocks that are stacked on top of block a to their initial positions.

> pile a onto b

> where a and b are block numbers, moves the pile of blocks consisting of block a, and any blocks that are stacked above block a, onto block b. All blocks on top of block b are moved to their initial positions prior to the pile taking place. The blocks stacked above block a retain their order when moved.

> pile a over b

> where a and b are block numbers, puts the pile of blocks consisting of block a, and any blocks that are stacked above block a, onto the top of the stack containing block b. The blocks stacked above block a retain their original order when moved.

> quit

> terminates manipulations in the block world.

> Any command in which a = b or in which a and b are in the same stack of blocks is an illegal command. All illegal commands should be ignored and should have no affect on the configuration of blocks.

### The Input

> The input begins with an integer n on a line by itself representing the number of blocks in the block world. You may assume that 0 < n < 25.
> The number of blocks is followed by a sequence of block commands, one command per line. Your program should process all commands until the quit command is encountered.

> You may assume that all commands will be of the form specified above. There will be no syntactically incorrect commands.

### The Output

> The output should consist of the final state of the blocks world. Each original block position numbered i ( 0 < i < n where n is the number of blocks) should appear followed immediately by a colon. If there is at least a block on it, the colon must be followed by one space, followed by a list of blocks that appear stacked in that position with each block number separated from other block numbers by a space. Don't put any trailing spaces on a line.

> There should be one line of output for each block position (i.e., n lines of output where n is the integer on the first line of input).

### Sample Input

```c
10
move 9 onto 1
move 8 over 1
move 7 over 1
move 6 over 1
pile 8 over 6
pile 8 over 5
move 2 over 1
move 4 over 9
quit
```

### Sample Output

```c
 0: 0
 1: 1 9 2 4
 2:
 3: 3
 4:
 5: 5 8 7 6
 6:
 7:
 8:
 9:
```

# 题目简述

> 这个题目的整体也就是模拟机器手臂搬东西，在整个过程中，机器手臂只能执行四种命令。如果是非法的命令的话你得忽略这些非法的命令，下面我将详细道来。

### move a onto b

> 将 a 移动到 b 上，在 a 和 b 上面的都挪回到初始位置。

### move a over b

> 将 a 移动到 b 那一堆，在 a 上面的都挪回到初始位置。

### pile a onto b

> 将 a 那一堆移动到 b 上，在 b 上面的都挪回到初始位置。

### pile a over b

> 将 a 那一堆移动到 b 那一堆

## 注意的地方

> 其实，就是要区分 move 和 pile 的区别，move 一次只能挪一个，而 pile 一次挪一堆。还有 onto 和 over 的区别，onto 是直接在 b 上， 而 over 是在 b 所在的那一堆上。

> 最后就是，非法情况了，一定不要把这个给遗忘了。如果 a 和 b 相同，或者 a 和 b 在同一堆都是非法的情况。

# 附上代码

```java
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.Stack;

public class Main {

    private static List<Stack<Integer>> blocks;

    public static void main(String[] args) {

        Scanner cin = new Scanner(System.in);

        int n = cin.nextInt();

        blocks = new ArrayList<>();

        for (int i = 0; i <= n; i++) {


            Stack<Integer> tmp = new Stack<>();

            if (i < n) {
                tmp.push(i);
            }

            blocks.add(tmp);
        }

        //处理整个输入和处理逻辑
        while (true) {

            String cmd = cin.next();

            if (cmd.equals("quit")) {

                break;
            } else if (cmd.equals("move")) {

                int a = cin.nextInt();

                String subCmd = cin.next();
                int b = cin.nextInt();

                int whereA = findBlock(a);
                int whereB = findBlock(b);

                if (!isIllegalCmd(whereA, whereB, a, b)) {

                    continue;
                }

                if (subCmd.equals("onto")) {

                    initPosition(a, whereA);
                    initPosition(b, whereB);

                    moveAToB(whereA, whereB);
                } else if (subCmd.equals("over")) {

                    initPosition(a, whereA);

                    moveAToB(whereA, whereB);
                }

            } else if (cmd.equals("pile")) {

                int a = cin.nextInt();

                String subCmd = cin.next();
                int b = cin.nextInt();

                int whereA = findBlock(a);
                int whereB = findBlock(b);

                if (!isIllegalCmd(whereA, whereB, a, b)) {

                    continue;
                }

                if (subCmd.equals("onto")) {

                    initPosition(b, whereB);

                    pileAToB(whereA, whereB, a);
                } else if (subCmd.equals("over")) {

                    pileAToB(whereA, whereB, a);
                }
            }
        }

        for (int i = 0; i < blocks.size() - 1; i++) {

            System.out.print(i + ":");

            Stack<Integer> tmp = new Stack<>();

            Stack<Integer> origin = blocks.get(i);

            while (!origin.empty()) {

                int p = origin.pop();
                tmp.push(p);
            }

            while (!tmp.empty()) {

                System.out.print(" " + tmp.pop());
            }

            System.out.println();
        }
    }

    //将p 所对应的位置i上面的所有block都挪到初始位置
    private static void initPosition(int p, int i) {

        Stack<Integer> tmp = blocks.get(i);
        while (true) {

            int b = tmp.peek();

            if (b == p) {

                break;
            }

            tmp.pop();
            blocks.get(b).push(b);
        }

    }

    //找到p所对应的block所在的堆
    private static int findBlock(int p) {

        int i;
        boolean flag = false;
        for (i = 0; i < blocks.size() - 1; i++) {

            Stack<Integer> tmp = blocks.get(i);

            for (Integer b : tmp) {

                if (b == p) {

                    flag = true;
                    break;
                }
            }

            if (flag) {

                break;
            }
        }

        return i;
    }

    //将堆 whereA 上的第一个，移动到 堆 whereB堆上
    private static void moveAToB(int whereA, int whereB) {

        int a = blocks.get(whereA).pop();

        blocks.get(whereB).push(a);
    }

    //将堆 whereA 的p及以上的block 都挪到 堆whereB上
    private static void pileAToB(int whereA, int whereB, int p) {

        Stack<Integer> tmp = blocks.get(blocks.size() - 1);
        tmp.clear();
        Stack<Integer> stackA = blocks.get(whereA);

        while (true) {

            int a = stackA.pop();
            tmp.push(a);

            if (a == p) {

                break;
            }
        }

        Stack<Integer> stackB = blocks.get(whereB);

        while (!tmp.empty()) {

            int b = tmp.pop();
            stackB.push(b);
        }
    }

    //判断命令是否合法
    private static boolean isIllegalCmd(int whereA, int whereB, int a, int b) {

        return a != b && whereA != whereB;
    }
}
```

# 附上一组 测试数据

```java
24
move 2 over 8
pile 11 onto 18
pile 13 onto 15
pile 22 over 15
move 17 over 11
move 12 over 7
pile 4 onto 17
move 19 over 22
pile 11 over 18
move 21 onto 4
pile 23 onto 9
pile 13 over 15
move 6 over 16
move 21 over 12
move 9 onto 5
move 21 onto 11
move 14 onto 7
pile 18 over 9
pile 1 over 12
move 3 over 13
pile 7 onto 4
pile 14 over 1
move 19 over 1
pile 9 over 20
pile 22 onto 17
pile 2 over 17
move 11 over 1
move 19 onto 15
move 6 onto 15
move 6 onto 22
pile 17 onto 9
move 11 onto 22
pile 19 onto 6
move 7 onto 3
pile 20 onto 3
move 15 onto 8
move 18 onto 21
move 21 onto 21
pile 14 over 4
pile 18 over 16
move 18 over 12
pile 9 onto 2
pile 12 onto 7
move 4 onto 8
pile 18 onto 10
move 3 onto 18
move 18 over 1
pile 6 over 13
pile 3 over 4
pile 17 onto 19
move 22 onto 15
move 5 over 19
pile 19 over 4
move 22 over 17
move 23 over 5
pile 15 over 21
move 5 over 11
move 3 over 11
pile 19 over 20
pile 8 onto 22
pile 0 over 12
pile 4 onto 2
move 23 onto 18
pile 8 over 6
move 15 over 13
pile 9 over 1
pile 1 over 15
pile 20 onto 11
pile 12 over 4
move 9 over 23
move 17 over 11
pile 13 onto 6
move 19 onto 21
move 14 over 21
pile 5 onto 15
pile 9 over 2
move 22 over 20
pile 5 onto 21
pile 22 over 17
move 22 onto 0
move 23 over 15
pile 19 onto 9
pile 19 onto 7
pile 23 onto 4
pile 10 onto 0
move 18 over 4
move 4 onto 21
move 1 over 11
pile 2 over 19
pile 17 onto 9
pile 22 onto 3
pile 11 over 8
move 3 over 3
pile 15 over 8
move 18 over 17
move 13 over 0
pile 3 onto 13
pile 2 onto 11
move 7 over 0
move 14 over 11
move 3 over 10
pile 6 over 0
move 3 over 14
pile 22 onto 0
pile 10 onto 9
move 15 over 14
move 18 onto 10
move 13 over 2
pile 18 onto 17
pile 7 over 4
pile 1 onto 16
move 10 over 11
move 6 onto 23
move 21 onto 15
pile 15 over 2
pile 12 over 5
pile 1 over 0
move 3 over 16
pile 22 over 21
move 6 over 1
pile 12 onto 7
pile 12 onto 14
move 10 onto 12
move 5 over 14
pile 12 onto 20
pile 20 over 13
pile 6 onto 6
move 20 over 17
move 23 over 23
pile 7 onto 14
move 21 over 7
pile 18 onto 0
pile 18 onto 7
move 17 onto 20
pile 22 onto 19
pile 6 onto 23
move 17 over 7
move 21 onto 7
pile 12 onto 6
move 23 over 4
pile 16 over 6
pile 21 onto 6
move 18 over 13
move 12 over 20
pile 11 onto 2
move 7 onto 1
pile 11 over 2
move 13 onto 18
pile 5 onto 19
pile 5 onto 16
pile 18 over 14
pile 22 over 5
pile 18 over 17
move 11 onto 1
move 14 over 18
move 12 onto 4
pile 10 onto 13
move 21 onto 19
move 3 onto 12
move 0 over 23
pile 17 over 10
pile 15 onto 13
move 21 over 5
move 14 onto 8
pile 5 onto 4
pile 10 onto 18
move 13 over 17
pile 15 onto 21
pile 20 onto 11
pile 7 over 11
pile 20 onto 4
pile 9 onto 22
pile 23 over 8
pile 0 onto 13
pile 9 over 23
move 7 over 22
move 4 over 7
pile 15 over 23
move 12 over 9
pile 23 over 16
move 4 over 22
move 15 onto 21
pile 19 over 21
move 3 onto 1
pile 3 onto 7
pile 9 over 22
pile 16 over 9
move 2 onto 23
pile 6 onto 14
move 9 over 16
move 9 over 0
move 13 over 6
move 22 onto 1
pile 7 onto 12
move 0 onto 6
move 0 over 15
move 19 onto 13
move 20 onto 6
move 12 onto 7
pile 4 onto 21
pile 22 onto 17
move 6 onto 9
move 20 over 7
pile 8 onto 12
move 9 onto 4
pile 21 over 7
move 7 over 13
pile 10 over 10
pile 14 onto 15
move 17 over 16
pile 0 onto 3
move 18 over 11
move 7 over 12
move 13 onto 10
move 12 over 15
pile 8 over 8
pile 2 onto 7
move 1 onto 19
pile 14 over 10
move 18 over 13
move 2 onto 6
move 2 over 7
pile 18 onto 16
move 1 onto 9
pile 4 over 16
move 3 onto 8
move 22 onto 0
move 7 onto 12
pile 14 over 18
move 10 onto 21
pile 12 onto 4
pile 2 over 16
pile 15 onto 4
move 15 over 1
move 12 over 16
pile 21 over 9
move 15 over 12
move 15 over 20
move 11 onto 19
pile 0 over 1
move 14 onto 13
move 4 over 7
pile 12 onto 4
pile 20 over 19
pile 1 over 15
move 19 onto 8
pile 18 onto 2
move 6 onto 14
move 23 onto 14
pile 8 onto 2
move 10 over 18
pile 21 over 23
move 20 over 2
pile 23 over 11
pile 0 over 0
move 9 over 17
pile 19 over 14
move 8 over 1
pile 4 onto 8
move 16 onto 6
move 17 over 17
pile 6 over 2
pile 12 onto 8
move 12 onto 23
pile 21 onto 8
pile 1 onto 16
pile 10 onto 5
move 4 over 5
pile 12 over 23
pile 16 over 19
move 1 over 10
move 8 over 14
move 18 onto 13
pile 5 over 10
pile 13 onto 13
move 4 onto 21
move 20 onto 5
pile 19 over 19
move 8 over 23
move 19 onto 12
move 11 over 17
move 8 over 11
move 23 onto 22
pile 4 over 19
move 12 onto 18
move 8 over 5
move 15 onto 9
pile 19 onto 12
pile 12 over 12
pile 5 over 14
move 7 onto 4
move 17 over 3
move 18 onto 22
move 3 over 11
move 7 onto 0
pile 23 over 3
pile 7 over 11
pile 21 over 17
pile 19 over 5
pile 8 onto 23
move 6 over 17
pile 6 onto 9
pile 20 onto 19
move 19 onto 21
move 2 over 1
pile 18 onto 15
pile 2 onto 16
pile 0 over 3
move 17 onto 15
pile 23 onto 12
move 13 over 14
move 4 onto 3
move 13 onto 21
pile 21 over 20
move 8 over 1
pile 20 over 6
move 11 onto 21
pile 0 onto 3
pile 17 over 21
pile 19 onto 13
pile 7 over 0
move 3 over 4
move 7 over 20
pile 1 over 12
pile 8 onto 9
pile 21 onto 17
pile 10 onto 14
move 14 over 23
pile 1 onto 1
pile 15 over 14
move 4 onto 2
move 9 onto 22
move 6 onto 11
move 19 onto 3
pile 23 onto 18
pile 18 onto 12
pile 20 over 13
pile 18 over 23
pile 20 over 13
pile 17 onto 5
pile 22 onto 23
pile 22 over 3
pile 16 over 22
pile 2 onto 12
move 7 onto 3
pile 7 onto 10
pile 0 onto 9
move 13 onto 3
pile 6 over 15
move 0 onto 10
pile 16 over 4
pile 15 onto 10
pile 17 over 5
move 2 onto 4
move 20 onto 16
move 22 over 3
pile 12 over 1
pile 0 onto 4
pile 0 over 22
pile 20 over 19
move 19 onto 18
move 8 over 9
pile 11 onto 12
pile 7 over 7
move 21 onto 9
move 16 onto 15
move 12 onto 18
pile 10 onto 2
move 16 over 4
pile 20 over 12
pile 11 over 13
pile 9 onto 15
move 18 over 15
move 19 over 14
pile 7 over 13
move 13 onto 0
move 11 onto 1
move 13 onto 18
move 21 onto 14
move 15 onto 22
pile 7 onto 23
pile 6 onto 18
pile 21 onto 14
pile 8 over 21
move 0 onto 17
move 17 over 23
pile 10 onto 4
move 18 over 15
pile 0 over 14
pile 2 over 3
move 12 over 7
move 1 onto 15
pile 3 onto 5
pile 2 over 19
pile 21 onto 20
move 17 over 8
move 11 over 7
pile 8 onto 3
pile 23 onto 18
move 9 over 18
move 4 onto 3
move 23 onto 7
pile 17 over 21
move 5 onto 12
move 9 over 4
move 23 over 6
pile 13 onto 13
move 5 over 11
pile 0 onto 23
pile 2 over 0
pile 9 onto 4
pile 17 over 0
pile 10 over 11
move 12 onto 14
move 20 onto 23
pile 7 over 13
pile 8 onto 4
move 18 over 2
pile 16 over 19
move 14 onto 1
pile 7 over 15
move 23 over 7
move 19 onto 17
move 3 over 19
pile 10 over 18
move 4 over 5
pile 0 onto 7
pile 13 onto 21
move 9 over 15
pile 11 onto 0
move 16 over 17
pile 4 over 20
pile 5 over 17
pile 8 onto 9
pile 19 over 5
move 22 over 20
pile 10 onto 0
pile 21 over 17
pile 14 over 12
pile 3 over 23
move 1 over 7
pile 14 over 22
pile 7 over 5
move 11 onto 23
move 3 over 17
pile 17 over 10
move 16 onto 14
pile 10 onto 11
move 5 over 15
move 6 onto 16
move 6 onto 8
pile 16 onto 15
move 9 onto 19
move 6 onto 11
move 10 over 22
pile 11 onto 20
pile 2 onto 8
move 18 onto 11
pile 17 onto 21
move 15 over 21
move 0 over 20
move 5 over 2
move 15 over 0
move 9 over 11
move 10 onto 20
move 20 over 1
pile 11 over 0
pile 2 over 3
pile 8 over 0
pile 10 onto 1
move 1 onto 14
pile 9 over 16
pile 1 over 9
pile 13 onto 21
move 15 onto 9
pile 6 over 0
pile 3 over 0
move 8 onto 14
move 19 over 19
pile 7 onto 2
move 22 over 17
pile 15 over 20
pile 2 onto 8
move 13 over 13
pile 8 over 14
move 19 over 5
move 20 onto 9
pile 18 onto 13
move 17 onto 4
move 7 over 18
pile 13 over 13
pile 6 onto 21
pile 14 over 20
pile 8 over 19
move 20 over 4
move 14 onto 14
pile 10 over 1
pile 18 onto 13
move 20 onto 1
move 6 over 19
pile 20 onto 6
pile 10 onto 9
pile 23 onto 7
pile 5 over 20
pile 13 onto 16
pile 15 over 15
move 18 onto 11
pile 19 onto 1
move 13 onto 1
move 0 over 22
move 4 over 6
move 14 over 1
move 11 onto 22
pile 15 over 17
pile 8 over 9
move 22 over 3
pile 6 over 19
move 3 onto 0
pile 5 onto 21
pile 17 over 19
pile 4 over 3
move 19 over 11
pile 8 over 8
pile 13 onto 23
move 22 onto 5
move 3 over 8
move 3 over 7
pile 0 over 7
pile 8 over 2
move 11 over 1
pile 23 over 6
move 1 onto 1
move 17 over 10
pile 0 onto 0
pile 12 over 6
move 1 over 3
move 23 onto 18
pile 7 onto 14
move 4 onto 7
move 19 over 19
pile 1 onto 3
move 11 over 10
move 7 onto 9
pile 23 onto 14
pile 5 onto 19
pile 8 onto 10
move 5 over 21
pile 0 over 17
move 0 over 14
move 17 onto 6
pile 8 over 14
pile 14 over 9
pile 16 onto 6
pile 13 onto 10
move 2 onto 20
pile 12 over 4
move 4 onto 17
move 12 onto 4
pile 20 onto 22
pile 18 over 11
move 7 over 9
move 18 onto 21
pile 13 onto 16
move 19 over 11
pile 8 onto 10
move 15 onto 12
pile 23 over 17
pile 6 onto 5
move 23 over 10
move 9 over 2
move 6 over 0
pile 5 over 21
pile 14 onto 10
move 13 over 19
pile 16 over 20
pile 18 over 4
pile 0 over 13
move 13 onto 9
move 13 over 23
pile 12 over 22
pile 7 over 10
move 11 onto 15
pile 9 onto 21
pile 18 over 0
pile 17 onto 18
move 3 onto 1
move 19 onto 13
move 9 onto 19
move 7 onto 5
pile 20 over 0
pile 4 over 13
pile 0 over 3
pile 18 over 19
move 22 over 4
move 18 onto 14
pile 20 over 23
pile 9 onto 0
pile 23 onto 4
pile 6 onto 13
pile 19 over 4
move 20 onto 3
move 1 onto 11
pile 14 onto 15
pile 16 over 1
pile 3 onto 16
move 15 over 9
pile 17 onto 4
move 8 over 7
move 19 over 1
pile 17 over 1
pile 5 over 19
pile 23 onto 18
move 9 over 3
pile 13 over 2
pile 20 over 21
pile 14 over 8
move 4 over 14
pile 7 over 15
pile 21 onto 10
move 3 onto 8
move 23 over 8
pile 16 over 0
pile 21 onto 3
pile 2 onto 18
move 20 over 12
pile 11 onto 18
move 18 over 9
move 7 onto 11
pile 20 over 21
move 21 over 17
pile 23 over 17
pile 3 over 10
move 9 onto 13
move 4 over 18
pile 17 onto 4
move 4 onto 19
pile 1 onto 6
move 4 over 2
move 20 onto 21
pile 2 over 1
move 7 over 7
pile 10 onto 21
move 3 over 2
pile 9 onto 15
move 23 onto 10
move 2 over 13
move 4 over 4
move 17 over 3
pile 2 over 2
pile 0 over 4
pile 19 over 15
pile 15 over 23
pile 4 onto 18
pile 12 over 1
move 6 over 8
move 11 over 17
move 9 over 21
move 7 onto 0
pile 10 over 20
pile 14 onto 8
pile 18 onto 2
move 5 onto 7
move 4 onto 16
move 19 over 21
pile 13 onto 0
move 23 onto 7
pile 18 onto 7
pile 3 onto 0
pile 6 onto 10
pile 11 onto 1
move 2 over 23
move 15 onto 10
pile 12 over 4
pile 13 onto 4
move 4 onto 16
pile 21 over 8
pile 4 onto 23
move 20 over 3
move 3 over 7
pile 22 over 18
move 11 over 5
pile 8 onto 21
pile 17 onto 1
pile 21 onto 2
pile 23 over 10
pile 3 onto 7
move 4 over 22
pile 11 onto 14
pile 3 over 10
pile 22 onto 8
move 7 over 12
pile 22 onto 21
pile 13 onto 2
move 5 over 5
move 11 onto 10
move 8 onto 13
pile 8 onto 11
pile 16 onto 2
pile 8 over 20
pile 7 over 13
pile 15 onto 11
move 16 onto 15
move 23 onto 16
move 2 over 19
pile 9 over 16
pile 22 over 2
move 21 onto 13
move 19 onto 4
pile 21 over 11
pile 8 onto 17
pile 20 onto 3
move 16 over 0
pile 4 over 6
pile 4 onto 18
pile 7 over 12
pile 12 over 15
pile 7 onto 15
move 22 onto 5
move 6 onto 7
move 11 onto 23
move 2 over 14
pile 15 over 23
pile 5 over 8
pile 6 onto 4
pile 6 onto 5
move 22 over 8
pile 22 over 22
pile 3 onto 4
pile 2 onto 6
pile 19 over 16
pile 3 onto 20
pile 22 over 23
pile 19 onto 0
pile 6 over 23
pile 22 onto 10
move 15 onto 20
pile 18 onto 22
move 4 onto 5
pile 16 over 21
pile 17 onto 14
pile 16 over 17
move 22 over 12
pile 23 over 16
move 5 over 17
pile 13 over 7
pile 21 onto 17
move 20 onto 8
move 4 over 16
move 15 onto 3
move 9 onto 22
pile 7 over 2
move 0 onto 16
move 1 onto 14
pile 12 onto 13
pile 23 onto 18
move 18 over 20
move 21 onto 7
move 14 onto 23
move 2 onto 1
move 22 over 14
pile 1 over 8
move 15 onto 19
move 17 onto 6
pile 21 onto 19
pile 23 over 21
pile 11 over 0
move 20 over 5
move 1 onto 19
move 5 over 4
pile 16 over 7
pile 4 over 6
move 16 onto 22
pile 1 onto 11
move 15 over 16
move 16 over 18
move 23 onto 21
move 21 over 19
pile 5 onto 2
move 22 over 3
move 22 over 4
pile 11 over 18
pile 23 onto 1
pile 21 onto 20
pile 10 over 13
pile 18 over 22
pile 0 onto 22
move 22 over 8
pile 12 over 3
pile 1 over 12
pile 2 onto 1
pile 0 over 18
pile 0 onto 23
pile 23 onto 4
move 8 over 12
move 14 over 13
pile 9 onto 1
pile 20 over 14
move 18 over 15
move 14 onto 7
pile 18 onto 15
move 1 onto 17
move 5 over 8
pile 1 over 16
pile 21 over 14
move 16 onto 1
move 10 over 14
move 15 onto 5
pile 3 onto 17
pile 11 onto 13
pile 21 onto 11
pile 21 over 16
move 11 onto 12
move 9 over 12
pile 4 over 14
pile 21 over 22
move 6 onto 4
pile 15 onto 8
pile 8 onto 11
pile 16 over 16
pile 9 over 22
pile 15 over 11
pile 10 over 7
pile 14 onto 14
move 5 onto 15
pile 4 over 14
move 12 over 11
move 0 onto 22
pile 20 over 14
pile 17 over 17
move 19 onto 9
pile 2 onto 5
pile 0 over 2
move 23 onto 7
move 22 over 13
move 9 onto 7
move 16 onto 21
move 1 over 13
move 3 over 5
pile 20 over 7
pile 12 over 8
pile 14 over 23
move 23 onto 7
pile 8 over 7
move 8 onto 12
pile 15 onto 23
move 10 over 11
pile 6 over 22
pile 0 over 5
move 19 onto 8
move 10 onto 4
pile 16 over 1
pile 13 onto 22
pile 1 over 11
pile 20 over 2
pile 6 onto 23
move 8 onto 0
move 5 onto 22
move 15 over 21
pile 12 over 13
move 8 onto 7
move 18 over 7
move 10 onto 1
move 2 onto 18
move 5 over 23
pile 15 onto 5
move 1 over 6
pile 1 onto 0
pile 1 onto 13
move 3 onto 2
move 0 onto 18
pile 2 onto 23
move 23 onto 22
move 18 onto 17
pile 21 over 1
pile 22 over 5
move 12 onto 4
move 11 over 14
pile 21 onto 16
move 2 onto 9
pile 10 onto 1
pile 15 onto 6
move 21 over 0
move 18 over 12
move 6 over 22
pile 15 onto 1
move 0 over 6
move 20 onto 8
move 21 over 5
pile 10 onto 16
pile 8 onto 23
move 10 onto 8
move 15 onto 22
move 3 over 13
pile 9 over 9
pile 8 onto 20
pile 19 onto 1
move 12 over 20
pile 16 onto 9
pile 3 onto 14
move 12 onto 15
pile 2 onto 0
move 7 onto 21
pile 19 onto 19
pile 15 onto 19
pile 9 onto 21
pile 1 onto 0
move 4 over 6
move 4 over 0
pile 15 onto 10
move 0 onto 22
pile 13 onto 14
pile 14 onto 6
quit
```

# 测试数据答案

```java
0:
1: 1
2: 2
3: 3
4:
5: 5 22 0
6: 6 14 13
7: 7
8:
9:
10: 10 15 12 4
11: 11
12:
13:
14:
15:
16:
17: 17
18: 18
19: 19
20: 20 8
21: 21 9 16
22:
23: 23

```
