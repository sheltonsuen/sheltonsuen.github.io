## 1.题目概览

> 这道题是杭电 1272，POJ 1308 如果写好了代码可以试一试。
> 小希的迷宫

> Time Limit: 2000/1000 MS (Java/Others) Memory Limit: 65536/32768 K (Java/Others)
> Total Submission(s): 28572 Accepted Submission(s): 8818

> Problem Description

> 上 次 Gardon 的迷宫城堡小希玩了很久（见 Problem B），现在她也想设计一个迷宫让 Gardon 来走。但是她设计迷宫的思路不一样，首先她认为所有的通道都应该是双向连通的，就是说如果有一个通道连通了房 间 A 和 B，那么既可以通过它从房间 A 走到房间 B，也可以通过它从房间 B 走到房间 A，为了提高难度，小希希望任意两个房间有且仅有一条路径可以相通（除非走 了回头路）。小希现在把她的设计图给你，让你帮忙判断她的设计图是否符合她的设计思路。比如下面的例子，前两个是符合条件的，但是最后一个却有两种方法从 5 到达 8。

> ###Input

> 输入包含多组数据，每组数据是一个以 0 0 结尾的整数对列表，表示了一条通道连接的两个房间的编号。房间的编号至少为 1，且不超过 100000。每两组数据之间有一个空行。
> 整个文件以两个-1 结尾。

> ###Output

> 对于输入的每一组数据，输出仅包括一行。如果该迷宫符合小希的思路，那么输出"Yes"，否则输出"No"。

> ###Sample Input

> 6 8 5 3 5 2 6 4
>
> 5 6 0 0
>
> 8 1 7 3 6 2 8 9 7 5
>
> 7 4 7 8 7 6 0 0

> 3 8 6 8 6 4

> 5 3 5 6 5 2 0 0
>
> -1 -1

> ###Sample Output

> YesYesNo

## 2.题目理解

> 题目的意思应该不难理解，就是给你很多成对的数，代表有关系的房间的编号，其实就是一棵树的抽象，你可以把这个想成一颗树。然后，你想一下，形成树的条件。

> 1.有一个根（root），并且这个根没有入度（没有老爸）。

> 2.不能形成环。

> 3.N 个结点（node）形成一棵树，有 n-1 条边。

> 然后与题目一相比，不就是要你判断给的一组测试数据是不是一棵树。（有坑点，这棵树的结点连通是双向的）

## 3.分析目标

#### 1.输入输出实现

> 这题的输入有那么一点特殊，首先题目是以两个-1 结束。并且每组测试数据是以两个 0 结束。
> 输出很简单，能则输出 Yes，否则输出 No。

#### 2.实现代码

```c
int a, b;  // 定义接收数据变量
while (~scanf("%d%d", &a, &b) &&!(a<0&&b<0))
{
int flag=1;
if (a==b)
{
if (a) flag=0;   //这是一个坑点，我被坑了好多次。0 0是树，而相同的如1 1不是树
}
else
{
int k=1, max=0;
while (a||b) //循环输入数据 并保存到 mark数组里
{
mark[k][0]=a;
mark[k++][1]=b;
if (max<a) max=a;
if (max<b) max=b;
scanf("%d%d", &a, &b);
}
_make(max);         //  初始化函数 ， 使每个节点都指向它自己
for (int i=1; i<k; i++)
if (_union(mark[i][0],mark[i][1])) //合并函数， 使两个节点合并
{
flag=0;
break;
}
if (flag)  //  下面的是  check看是不是一颗树 不然就成深林了
{
int forefather=_find(mark[1][0]);
for (int i=1; i<k; i++)
if (_find(mark[i][0])!=forefather||_find(mark[i][1])!=forefather)
{
flag=0;
break ;
}
}
}
printf("%s\n", flag?"Yes":"No"); //样例输出
```

####3.函数介绍

> void \_make(int max) 这个函数是初始化函数，目的是让每一个节点都指向他自己。这个函数有一个形参 max 他其实是一个小优化。一般情况都是从 1 初始化到 100000，时间复杂度是 O（n）,但是你其实只需要初始化到最大的输入数据就行了，后面的是没必要的。

> int \_find（int x）这个函数是查找函数，目的是找到祖先。本来这个函数可以压缩路径的。但是我在抗电上测试了一下，压缩路径过后反而时间变多了，适得其反所以还是不压缩路径了。对了此函数的返回值是祖先。如果自己不是自己的祖先的话，此函数会一直递归下去，所以有时候要考虑会不会爆栈。

> int \_union(int a, int b) 这个函数是合并函数，目的是把两个节点链接起来。 有两个形参，相信读者一看就知道这两个形参的意义了吧。这个函数是最主要的，用它来调用\_find()函数，完成合并工作，同时判断有没有环的形成。

#### 4.最后就是这题的坑点分析了

> 此题的坑点说不多也多，不小心就掉坑里了。

##### 1.就是那个 0 0， 1 1 之类的特叛，姿势不对就可能，掉进这个坑里。

##### 2.爆栈，这个是不注意，代码写挫了就会爆栈。对了别压缩路径。

##### 3.判断有没有环的形成。

##### 4.判断有没有形成深林。

我就找到这么多了。。。

#### 4.全部代码

```c
#include <stdio.h>
#define MAX 100001
int father[MAX], mark[MAX][2];
void _make(int max)
{
for (int i=1; i<=max; i++)
father[i]=i;
return ;
}
int _find(int x)
{
if (x!=father[x])
x=_find(father[x]);
return x;
}
int _union(int a, int b)
{
a=_find(a);
b=_find(b);
if (a==b) return 1;
father[a]=b;
return 0;
}
int main()
{
int a, b;  // 定义接收数据变量
while (~scanf("%d%d", &a, &b) &&!(a<0&&b<0))
{
int flag=1;
if (a==b)
{
if (a) flag=0;   //这是一个坑点，我被坑了好多次。0 0是树，而相同的如1 1不是树
}
else
{
int k=1, max=0;
while (a||b) //循环输入数据 并保存到 mark数组里
{
mark[k][0]=a;
mark[k++][1]=b;
if (max<a) max=a;
if (max<b) max=b;
scanf("%d%d", &a, &b);
}
_make(max);        //  初始化函数 ， 使每个节点都指向它自己
for (int i=1; i<k; i++)
if (_union(mark[i][0],mark[i][1])) //合并函数， 使两个节点合并
{
flag=0;
break;
}
if (flag)  //  下面的是  check看是不是一颗树 不然就成深林了
{
int forefather=_find(mark[1][0]);
for (int i=1; i<k; i++)
if (_find(mark[i][0])!=forefather||_find(mark[i][1])!=forefather)
{
flag=0;
break ;
}
}
}
printf("%s\n", flag?"Yes":"No"); //样例输出
}
return 0;
}
```
