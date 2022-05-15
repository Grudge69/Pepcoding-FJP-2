// Link: https://nados.io/question/k-largest-elements?zen=true

// Solution

import java.util.*;
 import java.lang.*;
 import java.io.*;
 class Main
  {
 	public static void main (String[] args) throws IOException {
 	 	Scanner scn= new Scanner(System.in);
 	    int n = scn.nextInt();
 	 	int[] num = new int[n];
 	 	for (int i = 0; i < n; i++) {
 	 	 	num[i] = scn.nextInt();
 	 	}
 	 	int k = scn.nextInt();
 	 	//  solve1(n,num,k);
		solve2(n,num,k);
 	}
 	 // -----------------------------------------------------
 	 // This is a functional problem. Only this function has to be written.
 	 // This function takes as input an array,n length of array and k.
 	 // It should print required output.

	// Time : O(nlogn + klogn), Space : O(n)
    public static void solve1(int n,int[] arr,int k) {
		PriorityQueue<Integer> pq = new PriorityQueue(Collections.reverseOrder());

		for(int val: arr) {
			pq.add(val);
		}

		for(int i=0; i<k; i++) {
			System.out.print(pq.remove() + " ");
		}
    }

	// Time : O(nlogk), Space : O(k)
	public static void solve2(int n,int[] arr,int k){
		PriorityQueue<Integer> pq = new PriorityQueue();

		//add first k elements
		for(int i=0; i<k; i++) {
			pq.add(arr[i]);
		}

		for(int i=k; i<arr.length; i++) {
			if(arr[i] > pq.peek()) {
				pq.remove();
				pq.add(arr[i]);
			}
		}

		List<Integer> ans = new ArrayList<>();
		while(pq.size()>0) {
			ans.add(pq.remove());
		}

		Collections.reverse(ans);

		for(int val: ans) {
			System.out.print(val + " ");
		}
    }
 }