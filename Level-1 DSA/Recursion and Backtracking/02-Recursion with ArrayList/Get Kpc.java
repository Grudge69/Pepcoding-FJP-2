import java.io.*;
import java.util.*;

public class Main {

    static String[] dtoc =  {".;","abc","def","ghi","jkl","mno","pqrs","tu","vwx","yz"};

    public static void main(String[] args) throws Exception {

        Scanner scn = new Scanner(System.in);
        String str = scn.next();
        ArrayList<String> ans = getKPC(0,str);
        System.out.println(ans);

    }

    public static ArrayList<String> getKPC(int idx, String str) {
        if(idx == str.length()){
            ArrayList<String> base = new ArrayList<>();
            base.add("");
            return base;
        }

        ArrayList<String> subAns = getKPC(idx+1,str);
        ArrayList<String> finalAns = new ArrayList<>();

        
        for(Character letter: dtoc[str.charAt(idx)-'0'].toCharArray()){// traverse through dtoc[str[idx]]
            for(String val: subAns){// Traverse through subAns
                finalAns.add(letter+val);
            }
            
        }

        return finalAns;
    }

}