import java.util.Scanner;

public class TemporadasDoAno {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("============DIGITE UM MÊS E DESCUBRA A ÉPOCA DO ANO==========");
        String mesAno = input.nextLine();

        switch (mesAno.toLowerCase()) {
            case "abril", "maio", "junho":
                System.out.println("ÉPOCA: OUTONO - MÊS INSERIDO: " + mesAno.toUpperCase());
                break;
            case "julho", "agosto", "setembro":
                System.out.println("ÉPOCA: INVERNO - MêS INSERIDO: " + mesAno.toUpperCase());
                break;
            case "outubro", "novembro", "dezembro":
                System.out.println("ÉPOCA: PRIMAVERA - MÊS INSERIDO: " + mesAno.toUpperCase());
                break;
            case "janeiro", "fevereiro", "março":
                System.out.println("ÉPOCA: VERÃO - MÊS INSERIDO: " + mesAno.toUpperCase());
                break;
            default:
                System.out.println("MÊS INVALIDO, INSIRA UM MÊS VÁLIDO!");
        }
        input.close();
    }
}
