import java.util.*;
    
    public class Main{
    
    public static void main(String[] args) {
      Scanner scn = new Scanner(System.in);
      int n = scn.nextInt();
      digits(n);
    }

    public static void digits(int n){
        if(n==0) return;
        
        int rem = n%10;
        System.out.println(rem);
        digits(n/10);
        
    }
}