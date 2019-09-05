# 题目概述

> 题目的意思是给你一个数列，找到一个子数列，这个子数列的和是所有子数列中和最大的。
> 当然把数列的所有数都列出来肯定不现实。
> 黑黑，不知道正不正确，我是先从第一个数开始依次加到最后一个数，并且把每一次加的和存到对应的一个和数组中。这样得到了一个不间断的和的数列，但是这样显然还是不行，在加的时候你还得判断一下，当和小于零的时候，就得把起始位置，向后挪一个了。这样才能保证，每次求得的子序列的和是所有子序列当中和最小的。

# 附上代码：

```c
import java.math.BigDecimal;
import java.util.Scanner;
import java.util.Stack;

public class Main{

	public static void main(String []args){

		Scanner cin=new Scanner(System.in);

		int t=cin.nextInt();
		int [] num=new int[100000];
		int [] sum=new int[100000];

		for (int i=1; i<=t; i++){

			int n=cin.nextInt();

			for (int j=0; j<n; j++){
				num[j]=cin.nextInt();
			}

			int su=0;
			int start=0;
			int end=0;

			for (int j=0; j<n; j++){
				sum[j]=0;
			}

			for (int j=0; j<n; j++){
				su+=num[j];
				sum[j]+=su;

				if (su<0) su=0;
			}

			for (int j=1; j<n; j++){
				if (sum[end]<sum[j]) end=j;
			}

			start=end;
			while (start>0&&sum[start-1]>=0){
				start--;
			}

			start++;
			end++;

			System.out.println("Case "+i+":");
			System.out.println(sum[end-1]+" "+start+" "+end);
			if (i<t) System.out.println();
		}
	}
}
```
