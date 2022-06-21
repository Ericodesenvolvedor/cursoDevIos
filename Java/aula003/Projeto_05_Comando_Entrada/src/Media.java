import java.util.Scanner;

public class Media {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        String aluno;
        double nota1, nota2, media;
        System.out.println("Digite seu nome: ");
        aluno = entrada.nextLine(); //

        System.out.println("Digite duas notas");
        nota1 = entrada.nextDouble();
        nota2 = entrada.nextDouble();

        media = (nota1 + nota2) / 2;

        System.out.println(aluno + " sua média é: " + media);

        entrada.close();
    }
}
