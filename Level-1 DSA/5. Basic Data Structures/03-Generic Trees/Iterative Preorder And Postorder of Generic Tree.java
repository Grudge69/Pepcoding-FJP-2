import java.io.*;
import java.util.*;

public class Main {
  private static class Node {
    int data;
    ArrayList<Node> children = new ArrayList<>();
  }

  public static void display(Node node) {
    String str = node.data + " -> ";
    for (Node child : node.children) {
      str += child.data + ", ";
    }
    str += ".";
    System.out.println(str);

    for (Node child : node.children) {
      display(child);
    }
  }

  public static Node construct(int[] arr) {
    Node root = null;

    Stack<Node> st = new Stack<>();
    for (int i = 0; i < arr.length; i++) {
      if (arr[i] == -1) {
        st.pop();
      } else {
        Node t = new Node();
        t.data = arr[i];

        if (st.size() > 0) {
          st.peek().children.add(t);
        } else {
          root = t;
        }

        st.push(t);
      }
    }

    return root;
  }

 //// SOLUTION STARTS FROM HERE   
  static class Pair{
    Node node;
    int state; 

    Pair(Node node, int state){
      this.node = node;
      this.state = state;
    
    }
  }

  public static void IterativePreandPostOrder(Node node) {
    Stack<Pair> stk = new Stack<>();
    StringBuilder pre = new StringBuilder();
    StringBuilder post = new StringBuilder();

    stk.push(new Pair(node, -1));

    // Algorithm
    // if state = -1 => pre-order, state++
    // if state = children.size => post-order, pop()
    // if state>=0 && state<=children.size - 1 => push(child), state++

    while(stk.size()>0){
      Pair top = stk.peek();
      
      if(top.state == -1){
        pre.append(top.node.data + " ");
        top.state++;

      }else if(top.state == top.node.children.size()){
        post.append(top.node.data + " ");
        stk.pop();

      }else{
        //get the child at index=state from the children arraylist
        Pair child = new Pair(top.node.children.get(top.state), -1);
        stk.push(child);

        top.state++;
      }
    }

    System.out.println(pre.toString());
    System.out.println(post.toString());
  }

  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int n = Integer.parseInt(br.readLine());
    int[] arr = new int[n];
    String[] values = br.readLine().split(" ");
    for (int i = 0; i < n; i++) {
      arr[i] = Integer.parseInt(values[i]);
    }

    Node root = construct(arr);
    IterativePreandPostOrder(root);
  }

}