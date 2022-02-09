import java.util.*;
  
  public class Main{
  
  public static void main(String[] args) {
      Scanner scn = new Scanner(System.in);
      int n = scn.nextInt();
      int sourceBase = scn.nextInt();
     int  destBase= scn.nextInt();
     System.out.println(anyBaseToAnyBase(n,sourceBase, destBase));
   }   
  

  public static int anyBaseToAnyBase(int n, int sb, int db){
    int ans = getValueIndecimal(n,sb);
    ans = getValueInBase(ans,db);
    return ans;
  }

    public static int getValueInBase(int n, int b){
       int mult = 1;
       int ans = 0;
       while(n!=0){
           int rem = n%b;
           ans += rem*mult;
           mult *= 10;
           n/=b;
       }
       return ans;
    }

    public static int getValueIndecimal(int n, int b){
      int mult = 1;
      int ans = 0;
      while(n!=0){
          int rem = n%10;
          ans += rem*mult;
          mult *= b;
          n/=10;
      }
      return ans;
   }

  }