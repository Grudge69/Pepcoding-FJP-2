import java.io.*;
import java.util.*;

public class Main{

public static void main(String[] args) throws Exception {
    Scanner scn = new Scanner(System.in);

    int n = scn.nextInt();
    int[] arr = new int[n];

    ArrayList<Integer> idx = new ArrayList<>();
    for(int i=0; i<n; i++){
        arr[i] = scn.nextInt();
    }

    int target = scn.nextInt();

    int[] ans = findIdx(arr, n, target);

    System.out.println(ans[0]);
    System.out.println(ans[1]);
 }

 public static int[] findIdx(int[] arr, int n, int target){
     ArrayList<Integer> ans = new ArrayList<>();

     for(int i=0; i<n; i++){
         if(arr[i]==target){
             ans.add(i);
         }
     }

     if(ans.size()==0){
         return new int[]{-1,-1};
     }

     return new int[]{ans.get(0),ans.get(ans.size()-1)};
 }

}