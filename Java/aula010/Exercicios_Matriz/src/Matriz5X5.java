public class Matriz5X5 {
    public static void main(String[] args) {
        int[][] arrayIdentidade = new int[5][5];

        for(int linha = 0; linha < arrayIdentidade.length; linha++) {
            for (int coluna = 0; coluna < arrayIdentidade[linha].length; coluna++) {
                if (linha == coluna) {
                    arrayIdentidade[linha][coluna] = 1;
                }

                System.out.print(arrayIdentidade[linha][coluna]);
            }
            System.out.println("");
        }
    }
}
