public class ForXWhile {
    public static void main(String[] args) {
        System.out.println("CONTAGEM COM FOR");

        for (int count = 0; count < 5; count++) {
            System.out.println("CONTAGEM: " + count);
        }

        int count = 0;

        System.out.println("CONTAGEM COM WHILE");

        while(count < 5) {
            System.out.println("CONTAGEM: " + count);
            count++;
        }
    }
}
