// Link: https://nados.io/question/arrange-buildings

// Solution

import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        // write your code here
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();

        // O(N) TIME

        // O(N) space
        // long[][] dp = new long[2][n];
        // for (int i = n - 1; i >= 0; i--) {
        //     if (i == n - 1) {
        //         dp[0][i] = 1;
        //         dp[1][i] = 1;
        //         continue;
        //     }

        //     dp[0][i] = dp[1][i + 1];
        //     dp[1][i] = dp[0][i + 1] + dp[1][i + 1];
        // }

        // long ans = dp[0][0] + dp[1][0];

        // System.out.println(ans*ans);

        long space = 1, building = 1;

        for(int i=2; i<=n; i++){
            //adding space, BS', SS' (B', S' are new space or buildings)
            long ns = space+building;
            //adding building, SB'
            long nb = space;

            space = ns;
            building = nb;
        }

        long ans = (space+building) * (space+building);

        System.out.println(ans);
    }
}