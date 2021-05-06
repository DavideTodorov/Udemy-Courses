public class Main {

    public static void main(String[] args) {

        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        System.out.println(recursiveLinearSearch(arr, 5, 0));
        //Expected output: 4

    }

    public static int recursiveLinearSearch(int[] arr, int el, int startingIndex) {

        if (startingIndex >= arr.length) {
            //If the program goes through the whole array
            //and doesn't find the searched element it returns -1
            return -1;
        } else if (el == arr[startingIndex]) {
            //If the program finds the element it returns its index
            return startingIndex;
        }

        //Recursive call to continue the search on the next index
        return recursiveLinearSearch(arr, el, startingIndex + 1);
    }
}
