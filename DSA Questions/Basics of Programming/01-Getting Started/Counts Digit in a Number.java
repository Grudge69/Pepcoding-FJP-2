import java.util.*;
  
  public class Main{
  
  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int c = 0;
    while(n!=0){
        c++;
        n/=10;
        
    }
    System.out.print(c);
   }
  }