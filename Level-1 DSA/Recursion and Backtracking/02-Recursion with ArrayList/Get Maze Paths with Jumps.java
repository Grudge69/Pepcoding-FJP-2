import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn = new Scanner(System.in);
        int rows = scn.nextInt();
        int cols = scn.nextInt();
        ArrayList<String> answer = getMazePaths(0,0,rows-1,cols-1);
        System.out.println(answer);

    }

    // sr - source row
    // sc - source column
    // dr - destination row
    // dc - destination column
    public static ArrayList<String> getMazePaths(int sr, int sc, int dr, int dc) {
        //POSITIVE BASE CASE
        if(sr==dr && sc==dc){
            ArrayList<String> basePaths = new ArrayList<>();
            basePaths.add("");
            return basePaths;
        }

        //NEGATIVE BASE CASE
        // else if(sr>dr || sc>dc){
        //     ArrayList<String> basePaths = new ArrayList<>();
        //     return basePaths;
        // }

        int jump = 1;
        ArrayList<String> res = new ArrayList<>();

        // Horizontal Jumps
        while(sc+jump<=dc){
            ArrayList<String> hPaths = getMazePaths(sr,sc+jump,dr,dc);
            for(String path: hPaths){
                res.add("h"+jump+path);
            }
            jump++;
        }

        jump = 1;
        // Vertical Jumps
        while(sr+jump<=dr){
            ArrayList<String> vPaths = getMazePaths(sr+jump,sc,dr,dc);
            for(String path: vPaths){
                res.add("v"+jump+path);
            }
            jump++;
        }

        jump = 1;
        // Diagonal Jumps
        while(sr+jump<=dr && sc+jump<=dc){
            ArrayList<String> dPaths = getMazePaths(sr+jump,sc+jump,dr,dc);
            for(String path: dPaths){
                res.add("d"+jump+path);
            }
            jump++;
        }

        return res;
    }

}