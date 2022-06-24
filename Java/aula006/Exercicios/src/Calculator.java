import java.util.Scanner;
import static java.lang.Math.sqrt;

public class Calculator {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("INSIRA UM N�MERO PARA COME�AR:");
        int number = input.nextInt();

        System.out.println("================TABUADA===============");

        for(int count = 1; count <= 10; count++) {
            System.out.println(number + " X " + count + " = " + number * count);
        }

        System.out.println("================RAIZ QUADRADA===============");
        System.out.println(sqrt(number));

        System.out.println("================IMPAR OU PAR===============");
        if(number % 2 == 0) {
            System.out.println("O n�mero " + number + " � par");
        } else {
            System.out.println("O n�mero " + number + " � impar");
        }

        input.close();
    }
}
