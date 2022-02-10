import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn = new Scanner(System.in);
        int x = scn.nextInt();
        int n = scn.nextInt();
        int ans = power(x,n);
        System.out.println(ans);
    }

    public static int power(int x, int n){
        if(n==0) return 1;

        int pnb2 = power(x,n/2);
        int pn = pnb2 * pnb2;

        //for odd power multiply by x
        if((n&1) !=0) pn = x * pn;

        return pn;
    }

}