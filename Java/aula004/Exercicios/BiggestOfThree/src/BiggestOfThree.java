import java.util.Scanner;

public class BiggestOfThree {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);


        System.out.println("Digite 3 n?meros: ");
        float number1 = input.nextFloat();
        float number2 = input.nextFloat();
        float number3 = input.nextFloat();
        
        boolean equalNumber1 = (number1 == number2) && (number1 == number3);
        boolean equalNumber2 = (number2 == number1) && (number2 == number3);
        boolean equalNumber3 = (number3 == number1) && (number3 == number2);
        boolean equalNumbers =  equalNumber1 && equalNumber2 & equalNumber3;

        boolean biggerThan1 = (number1 > number2) && (number1 > number3);
        boolean biggerThan2 = (number2 > number1) && (number2 > number3);

        if(equalNumbers) {
            System.out.println("Digite n?mero diferentes!");
        } else {
            if(biggerThan1) {
                System.out.println("O maior n?mero ?: " + number1);
            } else if(biggerThan2) {
                System.out.println("O maior n?mero ?: " + number2);
            } else {
                System.out.println("O maior n?mero ?: " + number3);
            }
        }

        input.close();
    }
}