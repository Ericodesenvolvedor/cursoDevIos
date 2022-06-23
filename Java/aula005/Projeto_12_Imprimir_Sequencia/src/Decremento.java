public class Decremento {
    public static void main(String[] args) {
        int contador = 100;

        while (contador > 0) {
            System.out.print(contador + " ");
            if (contador % 30 == 0) System.out.println("");
            contador--;
        }
    }
}
