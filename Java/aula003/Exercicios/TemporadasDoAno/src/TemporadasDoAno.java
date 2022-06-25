import java.util.Scanner;

public class TemporadasDoAno {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("============DIGITE UM M�S E DESCUBRA A �POCA DO ANO==========");
        String mesAno = input.nextLine();

        switch (mesAno.toLowerCase()) {
            case "abril", "maio", "junho":
                System.out.println("�POCA: OUTONO - M�S INSERIDO: " + mesAno.toUpperCase());
                break;
            case "julho", "agosto", "setembro":
                System.out.println("�POCA: INVERNO - M�S INSERIDO: " + mesAno.toUpperCase());
                break;
            case "outubro", "novembro", "dezembro":
                System.out.println("�POCA: PRIMAVERA - M�S INSERIDO: " + mesAno.toUpperCase());
                break;
            case "janeiro", "fevereiro", "mar�o":
                System.out.println("�POCA: VER�O - M�S INSERIDO: " + mesAno.toUpperCase());
                break;
            default:
                System.out.println("M�S INVALIDO, INSIRA UM M�S V�LIDO!");
        }
        input.close();
    }
}
