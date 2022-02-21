import java.io.*;
import java.util.*;

public class Main{
    
    public static void brokenEconomy(int[] arr, int d){
        int left = 0, right = arr.length - 1;
        
        while(left<=right){
            int mid = left + (right-left)/2;
            if(arr[mid]==d){
                left = mid -1;
                right = mid + 1;
                break;
                
            }else if(arr[mid]<d){
                left = mid + 1; 
            } 
            else{
                right = mid - 1;
            }
        }
        System.out.println(arr[left]);
        System.out.println(arr[right]);
    }

public static void main(String[] args) throws Exception {
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int[] arr = new int[n];
    for(int i=0; i<n; i++){
        arr[i] = scn.nextInt();
    }
    int d = scn.nextInt();
    brokenEconomy(arr,d);

 }

}