import java.io.*;
import java.util.*;

public class Main {
  private static class Node {
    int data;
    ArrayList<Node> children = new ArrayList<>();

    //constructor for Node curr = new Node(arr[i]); calls
    Node(int val){
      data = val;
    }
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
    //stk.top contains parent of current arr[i]
    Stack<Node> stk = new Stack<>();

    for(int i=0; i<arr.length; i++){
      if(arr[i]==-1){
        //end of child marker node
        stk.pop(); //PostOrder(child to parent)

      }else{
        // 1. Creation of Node
        Node curr = new Node(arr[i]);

        if(stk.isEmpty()){
          //curr node is root node(root has no parent)
          root = curr;
        }else{
          //Node parent = stk.peek();
          //2. Make curr node as child of parent
          stk.peek().children.add(curr);
        }

        //3. PreOrder(Push curr node in stack)
        stk.push(curr);
      }
    }

    return root;
  }

  public static int size(Node node){
    //faith => count 1 node of parent
    int sizeVal = 1;

    //get size for all children sub-trees and add it to our sizeVal
    for(Node child: node.children){
      sizeVal += size(child);
    }

    //return final answer
    return sizeVal;
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
    int sz = size(root);
    System.out.println(sz);
    // display(root);
  }

}