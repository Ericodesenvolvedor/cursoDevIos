public class Contador {
    public static void main(String[] args) {
        int contador;
        contador = 1;

        while (contador <= 100) {
            System.out.print(contador + " ");
            if (contador % 30 == 0) System.out.println("");
            contador++;
        }
    }
}