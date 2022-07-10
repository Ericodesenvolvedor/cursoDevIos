import java.util.Random;

public class Matriz100x100 {
    public static void main(String[] args) {
        int[][] arrayIdentidade = new int[100][100];
        Random rand = new Random();

        for(int linha = 0; linha < arrayIdentidade.length; linha++) {
            for (int coluna = 0; coluna < arrayIdentidade[linha].length; coluna++) {
                arrayIdentidade[linha][coluna] = rand.nextInt(100);
            }
        }

        System.out.println("\n\n=============ARRAY SEM MODIFICAÇÕES=================\n\n");

        for(int linha = 0; linha < arrayIdentidade.length; linha++) {
            for (int coluna = 0; coluna < arrayIdentidade[linha].length; coluna++) {

                if (coluna % 20 == 0) {
                    System.out.println("");
                }

                System.out.print(arrayIdentidade[linha][coluna] + "\t");
            }

            System.out.println("");
        }

        for(int linha = 0; linha < arrayIdentidade.length; linha++) {
            for (int coluna = 0; coluna < arrayIdentidade[linha].length; coluna++) {
                 if (arrayIdentidade[linha][coluna] % 2 == 0) {
                     arrayIdentidade[linha][coluna] = 1;
                 } else {
                     arrayIdentidade[linha][coluna] = -1;
                 }
            }
        }

        System.out.println("\n\n=============ARRAY COM MODIFICAÇÕES=================\n\n");

        for(int linha = 0; linha < arrayIdentidade.length; linha++) {
            for (int coluna = 0; coluna < arrayIdentidade[linha].length; coluna++) {

                if (coluna % 20 == 0) {
                    System.out.println("");
                }

                System.out.print(arrayIdentidade[linha][coluna] + "\t");
            }

            System.out.println("");
        }
    }
}
