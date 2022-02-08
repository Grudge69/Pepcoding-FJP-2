import java.util.*;

public class Main{

public static void main(String[] args) {
  // write your code here  
  Scanner scn = new Scanner(System.in);
  int num = scn.nextInt();
  int i=1;
  int inv=0;
  while(num!=0){
      int rem = num % 10;
      inv += i * (int)(Math.pow(10,rem-1));
      i++;
      num/=10;
  }
  System.out.println(inv);
 }
}