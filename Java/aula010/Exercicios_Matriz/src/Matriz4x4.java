import java.util.Scanner;
public class Matriz4x4 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int[][] arrayMaiores10 = new int[4][4];
        int somatorioMaiores10 = 0;
        System.out.println("DIGITE NÚMERO INTEIROS PARA COMPLETAR A MATRIZ");
        for (int linha = 0; linha < arrayMaiores10.length; linha++) {
            System.out.println("Linha #" + linha);
            for (int coluna = 0; coluna < arrayMaiores10[linha].length; coluna++) {
                arrayMaiores10[linha][coluna] = input.nextInt();

                if (arrayMaiores10[linha][coluna] > 10) {
                    somatorioMaiores10++;
                }
            }
        }

        for (int linha = 0; linha < arrayMaiores10.length; linha++) {
            for (int coluna = 0; coluna < arrayMaiores10[linha].length; coluna++) {
                System.out.print(arrayMaiores10[linha][coluna] + "\t");
            }
            System.out.println("");
        }
        System.out.printf("\nNo total foram contabilizados %d números maiores que 10", somatorioMaiores10);
    }
}
