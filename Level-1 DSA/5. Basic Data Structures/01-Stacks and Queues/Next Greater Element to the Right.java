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

    int[] nge = solve(a);
    display(nge);
 }

 public static int[] solve(int[] arr){
   int[] nge = new int[arr.length];
   Arrays.fill(nge, -1);
   Stack<Integer> stk = new Stack<>();

//TRAVELLING LEFT TO RIGHT
  //  for(int i=0; i<arr.length; i++){
  //    while(!stk.isEmpty() && arr[stk.peek()]<arr[i]){
  //      int val = stk.pop();
  //      nge[val] = arr[i];
  //    }

  //    stk.push(i);
  //  }

//TRAVELLING RIGHT TO LEFT
   for(int i=arr.length-1; i>=0; i--){
     //pop smaller or equal elements to the right(in the stack)
     while(!stk.isEmpty() && arr[stk.peek()]<=arr[i]){
       stk.pop();
     }

     if(!stk.isEmpty()){
       nge[i] = arr[stk.peek()];
     }

     // push ourself to find our nge to the right
     stk.push(i);
   }

   return nge;

 }

}