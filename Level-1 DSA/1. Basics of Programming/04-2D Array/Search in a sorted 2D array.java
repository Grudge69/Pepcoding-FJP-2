import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int[][] arr = new int[n][n];
        for(int i=0; i<n; i++){
            for(int j=0;j<n; j++){
                arr[i][j] = scn.nextInt();
            }
        }
        int x = scn.nextInt();
        int[] ans = searchMatrix(arr, x);
        if(ans[0]==-1){
            System.out.println("Not Found");
        }else{
            System.out.println(ans[0]);
            System.out.println(ans[1]);
        }
    }

    // BINARY SEARCH on 2D Matrix
    public static int[] searchMatrix(int[][] matrix, int target) {
        int r = 0;
        int c = matrix[0].length - 1;

        while (r < matrix.length && c >= 0) {
            if (matrix[r][c] == target) {
                // return true;
                return new int[]{r, c};
            }
            if (matrix[r][c] < target) {
                r++;
            } else {
                c--;
            }
        }
        // return false;
        return new int[]{-1, -1};
    }

}