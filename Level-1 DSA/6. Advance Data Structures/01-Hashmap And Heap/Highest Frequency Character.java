// Link: https://nados.io/question/highest-frequency-character?zen=true

// Solution

import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        // write your code here
        Scanner scn = new Scanner(System.in);
        String str = scn.next();

        highestFreqChar(str);
    }

    public static void highestFreqChar(String str) {
        HashMap<Character, Integer> fmap = new HashMap<>();

        for(char ch: str.toCharArray()) {
            if(fmap.containsKey(ch)) {
                fmap.put(ch, fmap.get(ch)+1);
            }else {
                fmap.put(ch, 1);
            }
        }

        int maxFreq = 0;
        char maxFreqChar = '\0';

        for(char ch: fmap.keySet()) {
            if(fmap.get(ch)>maxFreq) {
                maxFreq = fmap.get(ch);
                maxFreqChar = ch;
            }
        }

        System.out.println(maxFreqChar);
    }

}