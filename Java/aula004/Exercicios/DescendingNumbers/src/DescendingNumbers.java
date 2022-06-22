import java.util.Scanner;

public class DescendingNumbers {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Digite dois número e receba-os em ordem descrecente!");
        float number01 = input.nextFloat();
        float number02 = input.nextFloat();

        boolean biggerThen = number01 > number02;
        boolean equal = number01 == number02;

        if(equal) {
            System.out.println("Digite números diferentes!");
        } else {
            if (biggerThen) {
                System.out.println("Descrecente: "+ number01 + " " + number02);
            }

            else {
                System.out.println("Descrecente: "+ number02 + " " + number01);
            }
        }

        input.close();
    }
}
