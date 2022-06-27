package br.com.aluno;
import java.util.Scanner;

public class Banco {
    public static void main(String[] args) {
        boolean isLoop = true;
        Scanner input = new Scanner(System.in);
        System.out.println("==================BANCO DO CHURRASCO====================");
        do {
            System.out.println("PARA COME�AR, SELECIONE UM TIPO DE CONTA: ");
            System.out.println("------------------------------------------");
            System.out.println("1 - Conta Corrente");
            System.out.println("2 - Conta Poupan�a");
            System.out.println("3 - Conta Estudante");
            int selectAccount = input.nextInt();

            switch (selectAccount) {
                case 1:
                    System.out.println("Voc� selecionou a conta corrente do banco churrasco.");
                    break;
                case 2:
                    System.out.println("Voc� selecionou a conta poupan�a do banco churrasco.");
                    break;
                case 3:
                    System.out.println("Voc� selecionou a conta estudante do banco churrasco.");
                    break;
                default:
                    System.out.println("Selecione uma op��o v�lida!");
                    break;
            }

            System.out.println("Deseja continuar? [S/N]");
            char choise = input.next().charAt(0);

            if(choise == 'S' || choise == 's') {
                isLoop = true;
            } else {
                isLoop = false;
            }

        } while (isLoop == true);

        input.close();
    }
}
