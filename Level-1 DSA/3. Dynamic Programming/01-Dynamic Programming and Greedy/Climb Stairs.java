// Link: https://nados.io/question/climb-stairs

// Solution: recursion+memoized+tabular+space optimise

import java.io.*;
import java.util.*;

public class Main {
    public static int climb(int n, int idx){
        if(idx==n){
            return 1;
        }

        int ans = 0;

        //1 jump
        if(idx+1<=n){
            ans += climb(n, idx+1);
        }

        //2 jumps
        if(idx+2<=n){
            ans += climb(n, idx+2);
        }

        //3 jumps
        if(idx+3<=n){
            ans += climb(n, idx+3);
        }

        return ans;
    }

    public static int memo(int n, int idx, int[] dp){
        if(idx==n){
            return dp[idx] = 1;
        }

        if(dp[idx]!=-1){
            return dp[idx];
        }

        int ans = 0;

        //1 jump
        if(idx+1<=n){
            ans += climb(n, idx+1);
        }

        //2 jumps
        if(idx+2<=n){
            ans += climb(n, idx+2);
        }

        //3 jumps
        if(idx+3<=n){
            ans += climb(n, idx+3);
        }

        return dp[idx] = ans;
    }

    public static void main(String[] args) throws Exception {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();

        //recursion
        // int ans = climb(n, 0);
        // System.out.println(ans);

        //memoize
        // int[] dp = new int[n+1];
        // Arrays.fill(dp, -1);
        // int ans = memo(n, 0, dp);
        // System.out.println(ans);

        //tabular
        // int[] dp = new int[n+1];
        // for(int idx=n; idx>=0; idx--){
        //     if(idx==n){
        //         dp[idx] = 1;
        //         continue;
        //     }

        //     int ans = 0;

        //     //1 jump
        //     if(idx+1<=n){
        //         ans += dp[idx+1];
        //     }

        //     //2 jumps
        //     if(idx+2<=n){
        //         ans += dp[idx+2];
        //     }

        //     //3 jumps
        //     if(idx+3<=n){
        //         ans += dp[idx+3];
        //     }

        //     dp[idx] = ans;
        // }

        // System.out.println(dp[0]);


        //space optimized
        if(n==0 || n==1){
            System.out.println(1);
            return;
        }

        if(n==2){
            System.out.println(2);
            return;
        }

        int next = 2, next2 = 1, next3 = 1;
        //next = 1 ahead of curr
        //next2 = 2 ahead of curr
        //next3 = 3 ahead of curr
        for (int i = n - 3; i >= 0; i--) {
            int curr = next + next2 + next3;
            next3 = next2;
            next2 = next;
            next = curr;
        }
        System.out.println(next);
    }

}