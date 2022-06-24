import java.util.Scanner;

public class ReadAge {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("===============INFORME 5 IDADES===============");
        for(int count = 1; count <= 5; count++) {
            System.out.println("CONTAGEM #" + count);
            int myAge = input.nextInt();
            System.out.println("Sua idade: " + myAge + " anos.");
        }
        System.out.println("===============FIM PROGRAMA...===============");

        input.close();
    }
}
