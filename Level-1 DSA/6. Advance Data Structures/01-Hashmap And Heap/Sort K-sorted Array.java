// Link: https://nados.io/question/sort-k-sorted-array?zen=true

// Solution

import java.io.*;
import java.util.*;

public class Main {

   public static void main(String[] args) throws Exception {
      BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
      int n = Integer.parseInt(br.readLine());
      int[] arr = new int[n];

      for (int i = 0; i < n; i++) {
         arr[i] = Integer.parseInt(br.readLine());
      }

      int k = Integer.parseInt(br.readLine());
      // write your code here

      almostKSorted(arr, k);
   }

   /////////// ALGORITHM /////////////
   // make k+1 minHeap
   // add first k+1 elements
   // remove top element
   // keep doing it till end of arr

   public static void almostKSorted(int[] arr, int k) {
      PriorityQueue<Integer> pq = new PriorityQueue<>();

      for(int i=0; i<=k; i++) {
         pq.add(arr[i]);
      }

      for(int i=k+1; i<arr.length; i++) {
         System.out.println(pq.remove());
         pq.add(arr[i]);
      }

      while(pq.size()>0) {
         System.out.println(pq.remove());
      }
   }

}