// *	*	*		*	*	*	
// *	*				*	*	
// *						*	
// *	*				*	*	
// *	*	*		*	*	*	

import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        // write ur code here
        
        for(int i=1; i <= ((n/2) + 1); i++){
            
            // type 1
            for(int j=1; j<=((n/2) + 1 - (i-1)); j++){
                System.out.print("*\t");
            }
            
            // type 2
            for(int j=1; j<=(2*i-1); j++){
                System.out.print("\t");    
            }
            
            // type 3
            for(int j=1; j<=((n/2) + 1 - (i-1)); j++){
                System.out.print("*\t");    
            }
            
            System.out.println();
        }
        
        
        //lower half
        int inc_counter=2;
        int dec_counter=n-2;
        for(int i=1; i <= (n/2); i++){
            
            // type 1
            for(int j=1; j<=inc_counter; j++){
                System.out.print("*\t");
            }
            
            // type 2
            for(int j=1; j<=dec_counter; j++){
                System.out.print("\t");
            }
            
            // type 3 
            for(int j=1; j<=inc_counter; j++){
                System.out.print("*\t");
            }
            
            inc_counter++;
            dec_counter-=2;
            System.out.println();
            
        }

    }
}