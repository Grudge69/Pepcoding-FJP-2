// *	*	*	*	*	
//  	*	*	*	*	
// 	    	*	*	*	
// 		    	*	*	
// 				    *

import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);

        // write ur code here
        int n = scn.nextInt();
        for (int i = 1; i <= n; i++) {
            int space = i - 1;
            for (int j = 1; j <= space; j++) {
                System.out.print("\t");
            }
            for (int j = n - i + 1; j >= 1; j--) {
                System.out.print("*\t");
            }
            space++;
            System.out.println();
        }

    }
}