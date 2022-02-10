import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn = new Scanner(System.in);
        String str = scn.next();
        ArrayList<String> ans = gss(0,str);
        System.out.println(ans);

    }

    public static ArrayList<String> gss(int idx, String str) {
        if(idx == str.length()){
            ArrayList<String> base = new ArrayList<>();
            base.add("");
            return base;
        }


        ArrayList<String> ans = new ArrayList<>();
        ArrayList<String> subAns = gss(idx+1,str);

        // NO, don't include str[i]
        for(String val: subAns){
            ans.add(val);

        }

        // YES, include str[i]
        for(String val: subAns){
            ans.add(str.charAt(idx)+val);

        }

        return ans;
    }

}