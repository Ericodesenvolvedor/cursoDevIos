import java.util.Scanner;

public class BiggestAmong {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int count = 1;
        int acumullator = 0;
        System.out.println("Escreva 10 n�meros e descubra quem � o maior!");

        while(count <= 10) {
            System.out.println("CONTAGEM #" + count);
            int number = input.nextInt();

            if(number < acumullator) {
                acumullator = number;
            }

            if(count == 10) {
                System.out.println("O maior n�mero �: " + acumullator);
            }
            count++;
        }
    }
}
