import java.util.Scanner;

public class VerificadorValores {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int[] valores = new int[10];
        int maiorNumero = 0;
        float somarNotas = 0;

        System.out.println("VERIFICADOR DE VALORES\n");
        for (int count = 0; count < valores.length; count++) {
            System.out.println("N�MERO #"+ count);
            valores[count] = input.nextInt();
        }

        System.out.println("\nN�MEROS INSERIDOS");
        for (int count = 0; count < valores.length; count++) {
            System.out.println("N�" + count + " = " + valores[count]);
        }

        for (int count = 0; count < valores.length; count++) {
            if (valores[count] > maiorNumero) {
                maiorNumero = valores[count];
            }
        }

        int menorNumero = valores[0];

        System.out.println("Maior n�mero: " + maiorNumero);

        for (int count = 0; count < valores.length; count++) {
            if (valores[count] < menorNumero) {
                menorNumero = valores[count];
            }
        }

        System.out.println("Menor n�mero: " + menorNumero);

        for (int count = 0; count < valores.length; count++) {
            somarNotas += valores[count];
        }

        float media = somarNotas / valores.length;
        System.out.println("M�dia: " + media);

        input.close();
    }
}
