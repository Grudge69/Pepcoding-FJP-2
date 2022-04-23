// Link: https://nados.io/question/fibonacci-dp

// Solution: Recursive+Memoized+Tabular+Space Optimized

import java.io.*;
import java.util.*;

public class Main{
    public static int fibo(int n){
        if(n==0 || n==1){
            return n;
        }
        return fibo(n-1) + fibo(n-2);
    }

    public static int memo(int n, int[] dp){
        if(n==0 || n==1){
            return dp[n] = n;
        }

        if(dp[n] != -1){
            return dp[n];
        }
        int ans = memo(n-1, dp) + memo(n-2, dp);

        return dp[n] = ans;
    }

    public static void main(String[] args) throws Exception {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        //recursive
        // int ans = fibo(n);
        // System.out.println(ans);

        //memoized
        // int[] dp = new int[n+1];
        // Arrays.fill(dp, -1);
        // int ans = memo(n, dp);
        // System.out.println(ans);

        //tabular
        // int[] dp = new int[n+1];
        // for(int i=0; i<=n; i++){
        //     if(i==0 || i==1){
        //         dp[i] = i;
        //         continue;
        //     }

        //     int ans = dp[i-1] + dp[i-2];

        //     dp[i] = ans;
        // }

        // System.out.println(dp[n]);

        //space optimized
        int first=0, second=1;
        if(n==0 || n==1){
            System.out.println(n);
            return;
        }

        for(int i=2; i<=n; i++){
            int sum = first + second;
            first = second;
            second = sum;
        }

        System.out.println(second);
    }

}