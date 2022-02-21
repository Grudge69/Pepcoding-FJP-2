import java.io.*;
import java.util.*;

public class Main{
  public static void display(int[] a){
    StringBuilder sb = new StringBuilder();

    for(int val: a){
      sb.append(val + "\n");
    }
    System.out.println(sb);
  }

public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    int n = Integer.parseInt(br.readLine());
    int[] a = new int[n];
    for(int i = 0; i < n; i++){
       a[i] = Integer.parseInt(br.readLine());
    }

    int[] span = solve(a);
    display(span);
 }

 public static int[] solve(int[] arr){
   //find next greater to the left 
   //stockSpan[i] = nge left - idx(current)
   int[] stock = new int[arr.length];

// nge left can be derived by reversing the for loop in nge right for both approaches
   Stack<Integer> stk = new Stack<>();

   //right to left approach
   for(int i=0; i<arr.length; i++){

     while(stk.size()>0 && arr[stk.peek()]<=arr[i]){
       stk.pop();
     }

     if(stk.size()>0){
       stock[i] = (i-stk.peek());
     }else{
       stock[i] = i+1;
     }

     stk.push(i);
   }

   return stock;
 }

}