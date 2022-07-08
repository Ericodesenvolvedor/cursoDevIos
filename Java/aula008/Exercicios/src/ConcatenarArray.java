import java.util.Arrays;
import java.util.Scanner;

public class ConcatenarArray {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int[] tamanhoA = new int[4];
        int[] tamanhoB = new int[7];
        int[] tamanhoC = new int[tamanhoA.length + tamanhoB.length];

        System.out.println("VALORES DA COLUNA A");

        for (int count = 0; count < tamanhoA.length; count++) {
            tamanhoA[count] = input.nextInt();
        }

        System.out.println("VALORES DA COLUNA B");

        for (int count = 0; count < tamanhoB.length; count++) {
            tamanhoB[count] = input.nextInt();
            //System.out.println(tamanhoB[count]);
        }

        // ATRIBUINDO VALORES PARA O C
        int count  = 0;

        for (int indice : tamanhoA) {
            tamanhoC[count] = indice;
            count++;
        }

        for (int indice : tamanhoB) {
            tamanhoC[count] = indice;
            count++;
        }

        // MOSTRANDO VALORES A
        for (int countA = 0; countA < tamanhoA.length; countA++) {
            System.out.println("Valores A: " + tamanhoA[countA]);
        }

        // MOSTRANDO VALORES B
        for (int countB = 0; countB < tamanhoB.length; countB++) {
            System.out.println("Valores B: " +tamanhoB[countB]);
        }

        // MOSTRANDO VALORES CONCATENADOS
        System.out.println("VALORES CONCATENADOS");
        System.out.println(Arrays.toString(tamanhoC));

        input.close();
    }
}
