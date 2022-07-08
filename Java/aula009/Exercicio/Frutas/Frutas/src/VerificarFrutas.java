import java.util.Scanner;

public class VerificarFrutas {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String[] frutas = new String[5];

        System.out.println("VERIFICADOR DE FRUTAS ARRAY");
        System.out.println("---------------------------");
        System.out.println("Para começar, digite 5 frutas: \n");

        for(int count = 0; count < frutas.length; count++) {
            System.out.println("Fruta nº" + count);
            frutas[count] = input.nextLine();
        }

        System.out.println("");

        for(int count = 0; count < frutas.length; count++) {
            boolean isEmppty = frutas[count].isEmpty();
            if (isEmppty) {
                frutas[count] = "-";
            }
            System.out.println("Verificar se string é vázia: " + isEmppty);
        }

        System.out.println("");

        for(int count = 0; count < frutas.length; count++) {
            if(frutas[count].length() >= 3) {
                System.out.println("A fruta " + frutas[count].trim() + " tem 3 ou mais letras");
            } else {
                System.out.println("A fruta " + frutas[count].trim() + " tem menos de 3 letras");
            }
        }

        System.out.println("");

        for(int count = 0; count < frutas.length; count++) {
            int compararString = frutas[count].compareTo(frutas[2]);
            System.out.println("Comparando string: " + compararString);
        }

        System.out.println("");

        for(int count = 0; count < frutas.length; count++) {
            String upperCaseString = frutas[3].toUpperCase();
            String lowerCaseString = frutas[3].toLowerCase();
            int condicaoUpperCase = frutas[count].compareTo(upperCaseString);
            int condicaoLowerCase = frutas[count].compareTo(lowerCaseString);

            System.out.println("Comparando string com upperCase: " + condicaoUpperCase);
            System.out.println("Comparando string com lowerCase: " + condicaoLowerCase);
        }

        System.out.println("");

        for(int count = 0; count < frutas.length; count++) {
            String retirarEspacos = frutas[count].trim();
            System.out.println("Sem trim: " + frutas[count]);
            System.out.println("Com trim: " + retirarEspacos);
        }

        System.out.println("");

        for(int count = 0; count < frutas.length; count++) {
            System.out.println("Substituindo conteúdo com replace: " + frutas[count].replace(frutas[count], frutas[count].toLowerCase().trim()));
        }

        System.out.println("");

        for(int count = 0; count < frutas.length; count++) {
            System.out.println("Fruta: " + frutas[count].trim());
        }

        input.close();
    }
}
