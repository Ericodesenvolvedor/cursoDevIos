import java.util.Scanner;

public class ReadAgeWithWhile {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int count = 0;

        System.out.println("=================INSIRA 5 IDADES ABAIXO=================");

        while(count < 5) {
            int myAge = input.nextInt();
            System.out.println("Sua idade: " + myAge + " anos.");
            count++;
        }

        input.close();
    }
}
