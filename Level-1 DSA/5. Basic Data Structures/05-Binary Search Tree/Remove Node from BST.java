// Link: https://nados.io/question/remove-node-from-bst?zen=true

// Solution: DFS

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

  private static int max(Node root){
        if(root.right!=null){
            return max(root.right);
        }else{
            return root.data;
        }
    }

  public static Node remove(Node root, int key) {
    // write your code here
    if(root == null){
        return null;
    }
    
    if(key<root.data){
        root.left = remove(root.left, key);
    }else if(key>root.data){
        root.right = remove(root.right, key);
    }else{
        //case 1: no children i.e. leaf node
        if(root.right == null && root.left == null){
            return null;
        }
        
        //case 2: 1 child either left or right
        if(root.left == null){
            return root.right;
        }
        if(root.right == null){
            return root.left;
        }
        
        //case 3: two children
        else{
            int justSmaller = max(root.left);
            root.data = justSmaller;
            root.left = remove(root.left, justSmaller);
        }
    }
    
    return root;
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

    int data = Integer.parseInt(br.readLine());

    Node root = construct(arr);
    root = remove(root, data);

    display(root);
  }

}