import java.util.Random;

public class NumerosAleatorios {
    public static void main(String[] args) {
        Random gerador = new Random();

        int [] sorteio = new int[10];

        for (int count = 0; count < sorteio.length; count++) {
            sorteio[count] = gerador.nextInt(10) + 1;
        }

        int menorNumero = sorteio[0];

        for (int count = 0; count < sorteio.length; count++) {
            if (sorteio[count] < menorNumero) {
                menorNumero = sorteio[count];
            }
        }

        for (int count = 0; count < sorteio.length; count++) {
            System.out.println("Valores gerados: " + sorteio[count]);
        }

        System.out.println("O menor valor gerador é: " + menorNumero);
    }
}
