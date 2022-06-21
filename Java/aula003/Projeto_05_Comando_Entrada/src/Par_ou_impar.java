import java.util.Scanner;

public class Par_ou_impar {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Digite um número para verificar se é par ou impar:");
        int number = input.nextInt();
        boolean parOuImpar = number % 2 == 0;

        if(parOuImpar) {
            System.out.println("O número: " + number + " é par.");
        } else {
            System.out.println("O número: " + number + " é impar.");
        }

        input.close();
    }
}
