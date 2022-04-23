// Link: https://nados.io/question/climb-stairs-with-variable-jumps?zen=true

// Solution: rec+memo+tabulate

import java.io.*;
import java.util.*;

public class Main {
    public static int climb(int n, int[] jumps, int idx){
        if(idx==n){
            //found 1 way
            return 1;
        }

        int ans = 0;//gets all ways

        //all possible jumps from 1 to jumps[idx]
        for(int jump=1; jump<=jumps[idx]; jump++){
            //make the jump only if it is within bounds
            if(idx+jump<=n){
                ans += climb(n, jumps, idx+jump);
            }
        }

        return ans;
    }

    public static int memo(int n, int[] jumps, int idx, int[] dp){
        if(idx==n){
            //found 1 way
            return dp[idx] = 1;
        }

        if(dp[idx]!=-1){
            return dp[idx];
        }

        int ans = 0;//gets all ways

        //all possible jumps from 1 to jumps[idx]
        for(int jump=1; jump<=jumps[idx]; jump++){
            //make the jump only if it is within bounds
            if(idx+jump<=n){
                ans += memo(n, jumps, idx+jump, dp);
            }
        }

        return dp[idx] = ans;
    }

    public static void main(String[] args) throws Exception {
        Scanner scn = new Scanner(System.in);

        int n = scn.nextInt();
        int[] jumps = new int[n];
        for(int i=0; i<n; i++){
            jumps[i] = scn.nextInt();
        }

        //recursion
        // int ans = climb(n, jumps, 0);
        // System.out.println(ans);

        //memoize
        // int[] dp = new int[n+1];
        // Arrays.fill(dp, -1);
        // int ans = memo(n, jumps, 0, dp);
        // System.out.println(ans);

        //tabulation
        int[] dp = new int[n+1];
        for(int idx=n; idx>=0; idx--){
            if(idx==n){
                //found 1 way
                dp[idx] = 1;
                continue;
            }

            int ans = 0;//gets all ways

            //all possible jumps from 1 to jumps[idx]
            for(int jump=1; jump<=jumps[idx]; jump++){
                //make the jump only if it is within bounds
                if(idx+jump<=n){
                    ans += memo(n, jumps, idx+jump, dp);
                }
            }

            dp[idx] = ans; 
        }

        System.out.println(dp[0]);
    }

}