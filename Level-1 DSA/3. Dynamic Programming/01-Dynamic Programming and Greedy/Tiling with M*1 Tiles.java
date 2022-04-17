// Link: https://nados.io/question/tiling-with-m-1-tiles?zen=true

// Solution: rec+memo+tabulate

import java.io.*;
import java.util.*;

public class Main {
    public static int rec(int n, int m){
        if(n==0){
            return 1;
        }

        int hr=0, vt=0;

        if(n-m>=0){
            hr = rec(n-m, m);
        }

        vt = rec(n-1, m);

        return hr+vt;
    }

    public static int memo(int n, int m, int[] dp){
        if(n==0){
            return dp[n] = 1;
        }

        if(dp[n] != 0){
            return dp[n];
        }

        int hr=0, vt=0;

        if(n-m>=0){
            hr = memo(n-m, m, dp);
        }

        vt = memo(n-1, m, dp);

        return dp[n] = hr+vt;
    }

    public static void main(String[] args) throws Exception {

        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int m = scn.nextInt();
        

        //recursive
        // int ans = rec(n, m);
        // System.out.println(ans);

        //memoize
        // int[] dp = new int[n+1];
        // int ans = memo(n, m, dp);
        // System.out.println(ans);

        //tabular
        int[] dp = new int[n+1];
        for(int i=0; i<=n; i++){
            if(i==0){
                dp[i] = 1;
                continue;
            }

            int hr=0, vt=0;

            if(i-m>=0){
                hr = dp[i-m];
            }

            vt = dp[i-1];

            dp[i] = hr+vt;
        }

        System.out.println(dp[n]);
    }
}