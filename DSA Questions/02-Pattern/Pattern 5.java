//          *	
//      *	*	*	
// *   *	*	*	*	
//      *	*	*	
//          *	


import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);

        // write ur code here
        int n = scn.nextInt();
        int space_counter = n/2;
        
        for (int i=1;i<=(n/2)+1 ;i++ ){
            for(int j=1;j<=space_counter;j++){
                System.out.print("\t");
            }
            for(int j=1;j<=2*i-1;j++){
                System.out.print("*\t");
            }
            space_counter--;
            System.out.println();
        } 
        
        space_counter = 1;
        for (int i=1;i<=(n/2) ;i++ ){
            for(int j=1;j<=space_counter;j++){
                System.out.print("\t");
            }
            for(int j=1;j<=n-2*i;j++){
                System.out.print("*\t");
            }
            space_counter++;
            System.out.println();
        } 

    }
}