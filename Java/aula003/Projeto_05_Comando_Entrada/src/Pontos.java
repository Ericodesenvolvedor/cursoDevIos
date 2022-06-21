import java.util.Scanner;

public class Pontos {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Olá jogador, digite o seu número de pontos!");
        int pontos = input.nextInt();
        boolean nextLevel = pontos >= 1000;

        if(nextLevel) {
            System.out.println("Você passou para a próxima fase");
        }

        input.close();
    }
}
