// Link: https://nados.io/question/longest-consecutive-sequence-of-elements?zen=true

// Solution

import java.io.*;
import java.util.*;

public class Main{
    public static void main(String[] args) throws Exception {
        // write your code here
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int[] arr = new int[n];
        for(int i=0; i<n; i++) {
            arr[i] = scn.nextInt();
        }

        longestSequence(arr);
    }

    public static void longestSequence(int[] arr) {
        HashMap<Integer, Boolean> hmap = new HashMap<>();

        for(int val: arr) {
            hmap.put(val, false);
        }

        for(int val: hmap.keySet()) {
            if(hmap.containsKey(val-1) == false) {
                hmap.put(val, true);
            }
        }

        int maxCount = 1, startIdx = 1;
        for(int val: hmap.keySet()) {
            if(hmap.get(val) == true) {
                int count = 1;

                while(hmap.containsKey(val+count)) {
                    count++;
                }

                if(count > maxCount) {
                    maxCount = count;
                    startIdx = val;
                }
            }
        }

        for(int i=startIdx; i<startIdx+maxCount; i++) {
            System.out.println(i);
        }
    }
}