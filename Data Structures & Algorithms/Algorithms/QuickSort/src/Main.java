public class Main {

    public static void main(String[] args) {
        int[] numbers = {8, 25, 47, 3, 63, 47, 19, 8, 18, 3};

        QuickSort.sort(numbers);
        for (int number : numbers) {
            System.out.println(number);
        }
    }
}
