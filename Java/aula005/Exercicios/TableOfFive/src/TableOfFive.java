public class TableOfFive {
    public static void main(String[] args) {
        int count = 1;
        int tableOf = 5;

        System.out.println("============ TABUADA ===============");

        while(count <= 10) {
            System.out.println(tableOf + " X " + count + " = " + tableOf * count);
            count++;
        }
    }
}
