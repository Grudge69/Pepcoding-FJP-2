// Link: https://nados.io/question/get-common-elements-2?zen=true

// Solution

import java.io.*;
import java.util.*;

public class Main{
    public static void main(String[] args) throws Exception {
        // write your code here
        Scanner scn = new Scanner(System.in);
        int n1 = scn.nextInt();
        int[] one = new int[n1];
        for(int i=0; i<n1; i++) {
            one[i] = scn.nextInt();
        }

        int n2 = scn.nextInt();
        int[] two = new int[n2];
        for(int i=0; i<n2; i++) {
            two[i] = scn.nextInt();
        }

        gce2(one, two);
    }

    public static void gce2(int[] one, int[] two) {
        HashMap<Integer, Integer> fmap = new HashMap<>();

        for(int temp: one) {
            if(fmap.containsKey(temp)) {
                fmap.put(temp, fmap.get(temp)+1);
            }else {
                fmap.put(temp, 1);
            }
        }

        for(int temp: two) {
            if(fmap.containsKey(temp)) {
                System.out.println(temp);
                fmap.put(temp, fmap.get(temp)-1);

                if(fmap.get(temp)==0) {
                  fmap.remove(temp);
                }
            }
        }
    }
}