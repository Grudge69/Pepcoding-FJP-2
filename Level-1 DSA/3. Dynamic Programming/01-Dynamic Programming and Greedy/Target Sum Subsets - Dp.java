// Link: https://nados.io/question/target-sum-subsets-dp?zen=true

// Solution: rec+memo+tabular

import java.io.*;
import java.util.*;

public class Main {
    public static boolean rec(int[] arr, int n, int tar){
        // Base Cases
        if (tar == 0)
            return true;
        if (n == 0)
            return false;
 
        // If last element is greater than
        // sum, then ignore it and check in array of n-1 elements
        if (arr[n - 1] > tar)
            return rec(arr, n - 1, tar);
 
        // else, check if target can be obtained by any of the following

        // (a) including the last element
        boolean inc = rec(arr, n - 1, tar - arr[n - 1]);
        // (b) excluding the last element
        boolean exc = rec(arr, n - 1, tar);

        return inc || exc;
    }

    public static boolean memo(int[] arr, int n, int tar, boolean[][] dp){
        // Base Cases
        if (tar == 0) {
            return dp[n][tar] = true;
        }
            
        if (n == 0) {
            return dp[n][tar] = false;
        }

        if (dp[n][tar] != false) {
            return dp[n][tar];
        }
            
        if (arr[n - 1] > tar){
            return dp[n][tar] = rec(arr, n - 1, tar);
        }
            
        boolean inc = memo(arr, n - 1, tar - arr[n - 1], dp);
        
        boolean exc = memo(arr, n - 1, tar, dp);

        return dp[n][tar] = inc || exc;
    }

    public static void main(String[] args) throws Exception {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int[] arr = new int[n];
        for(int i=0; i<n; i++){
            arr[i] = scn.nextInt();
        }
        int tar = scn.nextInt();

        // recursive
        // boolean ans = rec(arr, n, tar);
        // System.out.println(ans);

        // memoize
        // boolean[][] dp = new boolean[n+1][tar+1];
        // boolean ans = memo(arr, n, tar, dp);
        // System.out.println(ans);

        // tabular
        boolean[][] dp = new boolean[n+1][tar+1];
        for(int idx = 0; idx<=n; idx++){
            for(int t = 0; t<=tar; t++){
                if (t == 0) {
                    dp[idx][t] = true;
                    continue;
                }
                    
                if (idx == 0) {
                    dp[idx][t] = false;
                    continue;
                }
                    
                if (arr[idx - 1] > t){
                    dp[idx][t] = dp[idx - 1][t];
                    continue;
                }
                    
                boolean inc = dp[idx - 1][t - arr[idx - 1]];
                
                boolean exc = dp[idx - 1][t];

                dp[idx][t] = inc || exc;
            }
        }

        System.out.println(dp[n][tar]);
    }
}