public class Main {

    public static void main(String[] args) {
        int[] numbers = {25, 47, 3, 63, 19, 8, 18};

        selectionSort(numbers);

        for (int number : numbers) {
            System.out.println(number);
        }
    }

    public static void selectionSort(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            int minIndex = i;

            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex]) {
                    //If the element on index j is smaller than the element
                    //on the index minIndex we assign the minIndex to j
                    minIndex = j;
                }
            }

            //We swap the current element with the current minNumber
            int temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}
