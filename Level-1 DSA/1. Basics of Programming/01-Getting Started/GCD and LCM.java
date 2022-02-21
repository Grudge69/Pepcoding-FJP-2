import java.util.*;
    
    public class Main{
    
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int a = scn.nextInt();
        int b = scn.nextInt();
        int gcd = gcdCalc(a,b);
        int lcm = (a*b)/gcd;
        System.out.println(gcd);
        System.out.println(lcm);
    }

    public static int gcdCalc(int a, int b){
        if(a==b) return a;
        if(a<b){
            a = a ^ b;
            b = a ^ b;
            a = a ^ b;
        }

        while(a%b!=0){
            int rem = a%b;
            a = b;
            b = rem;
        }

        return b;
    }
}