// Link: https://nados.io/question/min-cost-in-maze-traversal

// Solution: rec+memo+tabulation+space optimize

import java.io.*;
import java.util.*;

public class Main {
    private static int rec(int[][] maze, int n, int m, int row, int col){
        if(row == n-1 && col == m-1){
            return maze[row][col];
        }

        int ans = Integer.MAX_VALUE;

        //vertical down
        if(row + 1 <= n-1){
            ans = Math.min(ans, rec(maze, n, m, row+1, col));
        }

        //horizontal right
        if(col + 1 <= m-1){
            ans = Math.min(ans, rec(maze, n, m, row, col+1));
        }

        return ans + maze[row][col];
    }

    private static int memo(int[][] maze, int n, int m, int row, int col, int[][] dp){
        if(row == n-1 && col == m-1){
            return dp[row][col] = maze[row][col];
        }

        if(dp[row][col] != Integer.MAX_VALUE){
            return dp[row][col];
        }

        int ans = Integer.MAX_VALUE;

        //vertical down
        if(row + 1 <= n-1){
            ans = Math.min(ans, memo(maze, n, m, row+1, col, dp));
        }

        //horizontal right
        if(col + 1 <= m-1){
            ans = Math.min(ans, memo(maze, n, m, row, col+1, dp));
        }

        return dp[row][col] = ans + maze[row][col];
    }

    public static void main(String[] args) throws Exception {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int m = scn.nextInt();
        int[][] maze = new int[n][m];
        for(int i=0; i<n; i++){
            for(int j=0; j<m; j++){
                maze[i][j] = scn.nextInt();
            }
        }

        //recursive
        // int ans = rec(maze, n, m, 0, 0);
        // System.out.println(ans);

        //memoize
        // int[][] dp = new int[n][m];
        // for(int i = 0; i < n; i++) {
        //     Arrays.fill(dp[i], Integer.MAX_VALUE);
        // }
        // int ans = memo(maze, n, m, 0, 0, dp);
        // System.out.println(ans);

        //tabulation
        // int[][] dp = new int[n][m];
        // for(int row=n-1; row>=0; row--){
        //     for(int col=m-1; col>=0; col--){
        //         if(row == n-1 && col == m-1){
        //             dp[row][col] = maze[row][col];
        //             continue;
        //         }

        //         int ans = Integer.MAX_VALUE;

        //         //vertical down
        //         if(row + 1 <= n-1){
        //             ans = Math.min(ans, dp[row+1][col]);
        //         }

        //         //horizontal right
        //         if(col + 1 <= m-1){
        //             ans = Math.min(ans, dp[row][col+1]);
        //         }

        //         dp[row][col] = ans + maze[row][col];
        //     }
        // }
        // System.out.println(dp[0][0]);

        //space optimize
        int[] dp = new int[m];
        //for last row last col the cost of travel is cost at that place only
        dp[m-1] = maze[n-1][m-1];
        for(int col = m-2; col>=0; col--){
            //curr col cost = curr value in maze + cost from next col
            dp[col] += maze[n-1][col] + dp[col+1];
        }
        // LAST ROW COMPUTED => START FROM SECOND LAST ROW (n-2)

        //travel from n-2, m-1 to 0,0
        for (int row = n - 2; row >= 0; row--) {
            for (int col = m - 1; col >= 0; col--) {
                int ans = Integer.MAX_VALUE;

                if (row + 1 <= n - 1) {
                    ans = Math.min(ans, dp[col]);
                }

                if (col + 1 <= m - 1) {
                    ans = Math.min(ans, dp[col + 1]);
                }

                dp[col] = (ans + maze[row][col]);
            }
        }
        System.out.println(dp[0]);
    }

}