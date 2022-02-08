import java.util.*;
  
  public class Main{
  
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int a = sc.nextInt();
    int b = sc.nextInt();
    int c = sc.nextInt();

    
    if(b>a && b>c){ //to check b is largest
      int temp = a;
      a = b; //swap a&b
      b = temp;
        
    }
    else if(c>a && c>b){  // to check c is largest
      int tem = a;
      a = c; // swap a&c
      c = tem;
    }
    // we know a is the largest now
    if(a * a == b*b + c*c){
      System.out.println("true");
      }
    else{
      System.out.println("false");
      }
    
      
    
    // write your code here  
   }
  }