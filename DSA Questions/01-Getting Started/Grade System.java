import java.util.*;

public class Main {

    public static void main(String[] args) {
        // input - don't change this code
        Scanner scn = new Scanner(System.in);
        int marks = scn.nextInt();
        // input - don't change this code
        if (marks > 90) {// greater than 90 marks EXCELLENT
            System.out.println("excellent");
        } else if (marks <= 90 && marks > 80) {// between 80-90 marks GOOD
            System.out.println("good");
        } else if (marks <= 80 && marks > 70) {// between 70-80 marks FAIR
            System.out.println("fair");
        } else if (marks <= 70 && marks > 60) {// between 60-70 marks MEETS EXPECTATIONS
            System.out.println("meets expectations");
        } else {// below 60 marks BELOW PAR
            System.out.println("below par");
        }

    }
}