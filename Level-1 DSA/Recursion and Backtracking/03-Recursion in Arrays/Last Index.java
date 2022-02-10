import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int[] arr = new int[n];
        for(int i=0;i<n;i++){
            arr[i] = scn.nextInt();
        }
        int target = scn.nextInt();
        int ans = lastIndex(arr,n-1,target);
        System.out.println(ans);
    }

    public static int lastIndex(int[] arr, int idx, int x){
        if(idx<0) return -1;

        if(arr[idx] == x ) return idx;
        else{
            int subAns = lastIndex(arr,idx-1,x);
            return subAns;
        }
    }

}