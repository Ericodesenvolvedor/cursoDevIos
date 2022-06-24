import java.util.Scanner;

public class TirarMedia {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Descubra sua média com 8 notas");
        System.out.println("==============================");
        System.out.println("NOME DO ALUNO(A)");
        String nomeAluno = input.nextLine();

        float acumulador = 0;

        for(int count = 1; count <= 8; count++) {
            System.out.println("NOTA #" + count);
            float nota = input.nextFloat();
            acumulador += nota;

            if (count == 8) {
                float media = acumulador / 8;
                System.out.println("ALUNO: " + nomeAluno + ", SUA MÉDIA = " + media);
            }
        }
        input.close();
    }
}
