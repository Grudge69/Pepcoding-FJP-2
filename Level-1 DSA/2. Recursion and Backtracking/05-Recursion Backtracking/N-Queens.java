import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
       Scanner scn = new Scanner(System.in);
       int n = scn.nextInt();
       boolean[][] chess = new boolean[n][n];
       printNQueens(chess,"",0);
    }

    public static boolean isQueenSafe(boolean[][] chess, int row, int col){

        //vertically upwards
        for(int i=row-1, j=col; i>=0; i--){
            if(chess[i][j] == true){
                return false;
            }
        }

        //left diagonal upwards
        for(int i=row-1, j=col-1; i>=0 && j>=0; i--, j--){
            if(chess[i][j] == true){
                return false;
            }
        }

        //right diagonal upwards
        for(int i=row-1, j=col+1; i>=0 && j<chess.length; i--, j++){
            if(chess[i][j] == true){
                return false;
            }
        }

        return true;
    }

    public static void printNQueens(boolean[][] chess, String qsf, int row) {
        if(row == chess.length){
            System.out.println(qsf+".");
            return;
        }

        for(int col=0;col<chess[0].length;col++){
            if(isQueenSafe(chess,row,col) == true){
                chess[row][col] = true; // Edge Pre
                printNQueens(chess,qsf+row+"-"+col+", ",row+1);
                chess[row][col] = false; // Edge Post
            }
        }
    }
}