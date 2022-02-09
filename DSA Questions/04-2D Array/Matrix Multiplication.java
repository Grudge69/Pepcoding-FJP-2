import java.io.*;
import java.util.*;

public class Main{

public static void main(String[] args) throws Exception {
    Scanner scn = new Scanner(System.in);

    //Input matrix A
    int r1 = scn.nextInt();
    int c1 = scn.nextInt();

    int[][] A = new int[r1][c1];

    for(int i=0; i<A.length; i++){
        for(int j=0; j<A[0].length; j++){
            A[i][j] = scn.nextInt();
        }
    }

    //Input matrix B
    int r2 = scn.nextInt();
    int c2 = scn.nextInt();

    int[][] B = new int[r2][c2];

    for(int i=0; i<B.length; i++){
        for(int j=0; j<B[0].length; j++){
            B[i][j] = scn.nextInt();
        }
    }

    //Condition to check if the multiplication is possible
    if(c1!=r2){
        System.out.println("Invalid input");
        return;
    }

    //Resultant Matrix Prd
    int[][] prd = new int[r1][c2];

    for(int i=0; i<prd.length; i++){
        for(int j=0; j<prd[0].length; j++){
            //This is the loop that has K which varies in matrix A and B
            for(int k=0; k<c1; k++){
                prd[i][j] += A[i][k] * B[k][j]; 
            }
        }
    }

    //Displaying the resultant matrix
    for(int i=0; i<prd.length; i++){
        for(int j=0; j<prd[0].length; j++){
            System.out.print(prd[i][j]+" ");
        }
        System.out.println();
    }

 }

}