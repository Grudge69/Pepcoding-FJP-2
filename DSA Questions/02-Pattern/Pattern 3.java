//                   *	
//               *	 *	
//           *   *   *	
//       *	 *	 *	 *	
//   *	 *	 *	 *	 * 	

import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);

        // write ur code here
        int n = scn.nextInt();

        for (int i = 1; i <= n; i++) {
            // int k=1;
            // while(k<=n-i){
            // System.out.print("\t");
            // k++;
            // }
            for (int j = 1; j <= n; j++) {
                // Use Tab "\t" not Space " "
                if (j <= n - i) {
                    System.out.print("\t");
                } else {
                    System.out.print("*\t");
                }

            }
            System.out.println();
        }

    }
}