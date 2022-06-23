import java.util.Scanner;

public class BiggestAmong {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int count = 1;
        int acumullator = 999999999;

        System.out.println("Insira 10 números para descobrir o menor!");
        
        do {
            System.out.println("CONTAGEM #" + count);

            int number = input.nextInt();
            boolean assignValue = number < acumullator;
            
            if(assignValue) {
                acumullator = number;
            }

            count++;
                    
        } while (count <= 10);

        System.out.println("O menor número é: " + acumullator);

        input.close();
    }
}