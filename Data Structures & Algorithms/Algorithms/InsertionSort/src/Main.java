public class Main {

    public static void main(String[] args) {
        int[] numbers = {25, 47, 3, 63, 47,19, 8, 18};

        insertionSort(numbers);

        for (int number : numbers) {
            System.out.println(number);
        }
    }

    public static void insertionSort(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            int element = arr[i]; //The element to be sorted

            for (int j = i - 1; j >= 0; j--) {
                if (arr[j] > element) {
                    //If the element's previous element is a smaller number
                    //we swap their position
                    int temp = arr[j];
                    arr[j] = element;
                    arr[j + 1] = temp;
                }
            }
        }
    }
}
