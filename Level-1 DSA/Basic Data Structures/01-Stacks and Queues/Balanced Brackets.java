import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn = new Scanner(System.in);

        Stack<Integer> stk = new Stack<>();

        String str = scn.nextLine();
        
        for(int i=0; i<str.length(); i++){
            char ch = str.charAt(i);
            if(ch=='(' || ch=='{' || ch=='['){
                //opening
                stk.push(i);
            }else if(ch==')'){
                //closing
                if(stk.size()==0){
                    System.out.println("false");
                    return;
                }
                char top = str.charAt(stk.peek());
                if(top == '('){
                    stk.pop();
                }else{
                    System.out.println("false");
                    return;
                }
            }else if(ch=='}'){
                //closing
                if(stk.size()==0){
                    System.out.println("false");
                    return;
                }
                char top = str.charAt(stk.peek());
                if(top == '{'){
                    stk.pop();
                }else{
                    System.out.println("false");
                    return;
                }
            }else if(ch==']'){
                //closing
                if(stk.size()==0){
                    System.out.println("false");
                    return;
                }
                char top = str.charAt(stk.peek());
                if(top == '['){
                    stk.pop();
                }else{
                    System.out.println("false");
                    return;
                }
            }
        }

        if(stk.size()!=0){
            System.out.println("false");
            return;
        }

        System.out.println("true");

    }

}