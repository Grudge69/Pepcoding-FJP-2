import java.io.*;
import java.util.*;

public class Main{
  public static void display(int[] a){
    StringBuilder sb = new StringBuilder();

    for(int val: a){
      sb.append(val + " ");
    }
    System.out.println(sb);
  }

  public static void rotate(int[] a, int k){
    
    int n = a.length;
    k%=n;
    if(k<0){
        k+=n;
    }

    //part 1 => (0 to n-k-1)
    reverse(a,0,n-k-1);
    //part 2 => (n-k to n-1)
    reverse(a,n-k,n-1);
    //reverse entire array
    reverse(a,0,n-1);

  }

  //Reverse elements of an array
  public static void reverse(int[] a,int start, int end){
    int left=start, right=end;
    while(left<right){
        a[left] = a[left] ^ a[right];
        a[right] = a[left] ^ a[right];
        a[left] = a[left] ^ a[right];

        left++;
        right--;
    }
  }


public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    int n = Integer.parseInt(br.readLine());
    int[] a = new int[n];
    for(int i = 0; i < n; i++){
       a[i] = Integer.parseInt(br.readLine());
    }
    int k = Integer.parseInt(br.readLine());

    rotate(a, k);
    display(a);
 }

}