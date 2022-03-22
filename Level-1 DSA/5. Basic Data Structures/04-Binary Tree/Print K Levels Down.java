// Link: https://nados.io/question/print-k-levels-down

// SOLUTION : BFS & DFS

import java.io.*;
import java.util.*;

public class Main {
  public static class Node {
    int data;
    Node left;
    Node right;

    Node(int data, Node left, Node right) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
  }

  public static class Pair {
    Node node;
    int state;

    Pair(Node node, int state) {
      this.node = node;
      this.state = state;
    }
  }

  public static Node construct(Integer[] arr) {
    Node root = new Node(arr[0], null, null);
    Pair rtp = new Pair(root, 1);

    Stack<Pair> st = new Stack<>();
    st.push(rtp);

    int idx = 0;
    while (st.size() > 0) {
      Pair top = st.peek();
      if (top.state == 1) {
        idx++;
        if (arr[idx] != null) {
          top.node.left = new Node(arr[idx], null, null);
          Pair lp = new Pair(top.node.left, 1);
          st.push(lp);
        } else {
          top.node.left = null;
        }

        top.state++;
      } else if (top.state == 2) {
        idx++;
        if (arr[idx] != null) {
          top.node.right = new Node(arr[idx], null, null);
          Pair rp = new Pair(top.node.right, 1);
          st.push(rp);
        } else {
          top.node.right = null;
        }

        top.state++;
      } else {
        st.pop();
      }
    }

    return root;
  }

  public static void display(Node node) {
    if (node == null) {
      return;
    }

    String str = "";
    str += node.left == null ? "." : node.left.data + "";
    str += " <- " + node.data + " -> ";
    str += node.right == null ? "." : node.right.data + "";
    System.out.println(str);

    display(node.left);
    display(node.right);
  }

  //BFS
  public static void printKLevelsDown2(Node node, int k){
    if(node == null){
      return;
    }

    Queue<Node> q = new ArrayDeque<>();
    q.add(node);

    while(q.size()!=0){
      int count = q.size();

      while(count-->0){
        Node curr = q.remove();
        if(k==0){
          //if k==0, it means we have reached the level from root which is k levels down as k was decrementing by 1 at each level
          System.out.println(curr.data);//just print the value

        } else {
          //add in queue only those values which are above the our required level(k levels down from node)
          //this is because after k levels down we don't need to go any further so we can just keep the queue empty and the loop will be terminated
          if(curr.left!=null){
            q.add(curr.left);
          }
          if(curr.right!=null){
            q.add(curr.right);
          }

        }
        
      }
      //decrement k by 1 after each level to count to k levels down
      k--;
    }
  }

  // DFS
  public static void printKLevelsDown(Node node, int k){
    // write your code here
    if(node == null){
      return;
    }
    //counting from k->0 going down each level and at k=0, it means we have reached k levels down
    if(k==0){
      System.out.println(node.data);
      return;//we don't need to go down any further
    }

    //go to more depth and decrement k by 1 at each level
    printKLevelsDown(node.left, k-1);
    printKLevelsDown(node.right, k-1);
  }

  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int n = Integer.parseInt(br.readLine());
    Integer[] arr = new Integer[n];
    String[] values = br.readLine().split(" ");
    for (int i = 0; i < n; i++) {
      if (values[i].equals("n") == false) {
        arr[i] = Integer.parseInt(values[i]);
      } else {
        arr[i] = null;
      }
    }

    int k = Integer.parseInt(br.readLine());

    Node root = construct(arr);
    printKLevelsDown(root, k);
    // printKLevelsDown2(root, k);
  }

}