import java.util.Scanner;

public class ReadEvenOrOdd {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Digite 10 n�meros para ver quais s�o pares ou impares");

        int count = 1;
        while(count <= 10) {
            int number = input.nextInt();
            boolean evenNumber = number % 2 == 0;
            boolean done = count == 10;

            if(evenNumber) {
                System.out.println(count + "- O n�mero "  + number + " � par");
            } else {
                System.out.println(count + "- O n�mero "  + number + " � impar");
            }

            if (done) {
                System.out.println("Fim..........");
            }

            count++;
        }
    }
}