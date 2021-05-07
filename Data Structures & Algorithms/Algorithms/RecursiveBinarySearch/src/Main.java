public class Main {

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        System.out.println(recursiveBinarySearch(arr, 7, 0, arr.length - 1));
        //Expected output: 6
    }

    public static int recursiveBinarySearch(int[] arr, int el, int startIndex, int endIndex) {
        int midIndex = (startIndex + endIndex) / 2;

        if (startIndex > endIndex) {
            //The end of the array is reached and the items hasn't been found so the
            //method returns -1
            return -1;
        } else if (arr[midIndex] == el) {
            //The searched element is found on the mid index and we retutn it
            return midIndex;
        } else if (arr[midIndex] < el) {
            return recursiveBinarySearch(arr, el, midIndex + 1, endIndex);
        } else {
            return recursiveBinarySearch(arr, el, startIndex, midIndex - 1);
        }
    }
}
