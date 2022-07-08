import java.util.Scanner;
public class OrderInversaNomes {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String[] nomes = new String[5];

        System.out.println("INSIRA 5 NOMES: ");

        for (int count = 0; count < nomes.length; count++) {
            nomes[count] = input.nextLine();
        }

        for (int count = 0; count < nomes.length; count++) {
            System.out.println("Array normal: " + nomes[count]);
        }

        System.out.println("");

        for (int count = nomes.length - 1; count >= 0; count--) {
            System.out.println("Array inverso: " + nomes[count]);
        }

        input.close();
    }
}
