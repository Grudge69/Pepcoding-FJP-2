import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        ArrayList<String> ans = getStairPaths(n);
        System.out.println(ans);

    }

    public static ArrayList<String> getStairPaths(int n) {
        // if(n<0){// negative base case
        //     ArrayList<String> base = new ArrayList<String>();
        //     return base;
        // }else 
        if(n==0){// positive base case
            ArrayList<String> base = new ArrayList<String>();
            base.add("");
            return base;
        }

        ArrayList<String> subAns1 = new ArrayList<String>();
        ArrayList<String> subAns2 = new ArrayList<String>();
        ArrayList<String> subAns3 = new ArrayList<String>();

        // Smart Calls to ignore negative base cases
        if(n-1 >= 0) subAns1 = getStairPaths(n-1);
        if(n-2 >= 0) subAns2 = getStairPaths(n-2);
        if(n-3 >= 0) subAns3 = getStairPaths(n-3);

        ArrayList<String> ans = new ArrayList<String>();
        for(String str: subAns1){
            ans.add("1"+str);
        }
        
        for(String str: subAns2){
            ans.add("2"+str);
        }

        for(String str: subAns3){
            ans.add("3"+str);
        }

        return ans;
    }

}