import java.util.*;
  
  public class Main{
  
  public static void main(String[] args) {
      Scanner scn = new Scanner(System.in);
  
      int k = scn.nextInt();
      while(k!=0){
        int n = scn.nextInt();
        boolean flag = false;
        for(int i=2; i*i<=n; i++){
          if(n%i == 0){
              System.out.println("not prime");
              flag = true;
              break;
          }
        }

        if(flag == false){
          System.out.println("prime");
        }
        k--;
      }
  
   }
  }