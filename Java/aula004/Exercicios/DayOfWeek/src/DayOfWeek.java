import java.util.Scanner;

public class DayOfWeek {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Digite um número de 1 a 7");
        int number = input.nextInt();
        switch (number) {
            case 1:
                System.out.println("Segunda-Feira");
                break;
            case 2:
                System.out.println("Terça-Feira");
                break;
            case 3:
                System.out.println("Quarta-Feira");
                break;
            case 4:
                System.out.println("Quinta-Feira");
                break;
            case 5:
                System.out.println("Sexta-Feira");
                break;
            case 6:
                System.out.println("Sabado-Feira");
                break;
            case 7:
                System.out.println("Domingo-Feira");
                break;
            default:
                System.out.println("Digite uma opção correta! tente novamente.");
        }
        input.close();
    }
}
