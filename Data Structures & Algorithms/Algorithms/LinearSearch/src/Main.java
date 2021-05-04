public class Main {

    public static void main(String[] args) {

        int[] numbers = {1, 2, 3, 4, 5, 6};

        System.out.println(linearSearch(numbers, 3)); // Expected output: 2
    }

    public static int linearSearch(int[] arr, int value) {

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == value) {
                //If the element we are searching for is found return its index
                return i;
            }
        }

        //If the element is not found return -1
        return -1;
    }
}
