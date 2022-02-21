import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn = new Scanner(System.in);
        int rows = scn.nextInt();
        int cols = scn.nextInt();
        ArrayList<String> ans = getMazePaths(0,0,rows-1,cols-1);
        System.out.println(ans);
    }

    // sr - source row
    // sc - source column
    // dr - destination row
    // dc - destination column
    public static ArrayList<String> getMazePaths(int sr, int sc, int dr, int dc) {
        //POSITIVE BASE CASE
        if(sr==dr && sc==dc){
            ArrayList<String> base = new ArrayList<>();
            base.add("");
            return base;
        }
        //NEGATIVE BASE CASE
        // else if(sr>dr || sc>dc){
        //     ArrayList<String> base = new ArrayList<>();
        //     return base;
        // }

        ArrayList<String> ans = new ArrayList<>();

        // STOPS FROM NEGATIVE BASE CASES TO OCCUR

        if(sc<=dc){// IF HORIZONTAL MOVE IS POSSIBLE
            // Horizontal paths
            ArrayList<String> hPaths = getMazePaths(sr,sc+1,dr,dc);
            for(String val: hPaths){
                ans.add("h"+val);
            }
        }
        
        if(sr<=dr){// IF VERTICAL MOVE IS POSSIBLE
            // Vertical paths
            ArrayList<String> vPaths = getMazePaths(sr+1,sc,dr,dc);
            for(String val: vPaths){
                ans.add("v"+val);
            }
        }

        return ans;
    }

}