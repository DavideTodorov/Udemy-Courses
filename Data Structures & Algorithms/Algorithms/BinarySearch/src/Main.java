public class Main {

    public static void main(String[] args) {
        int[] numbers = {2, 5, 7, 9, 10, 13, 14, 17, 20, 21};

        System.out.println(binarySearch(numbers, 14)); //Expected output: 6
    }

    public static int binarySearch(int[] arr, int value) {
        int firstIndex = 0;
        int middleIndex = 0;
        int lastIndex = arr.length - 1;

        while (firstIndex <= lastIndex) {
            //Find the middle element in the array
            middleIndex = (firstIndex + lastIndex) / 2;
            int middleElement = arr[middleIndex];

            if (middleElement == value) {
                //If the middle element equals the searched element we return the index
                return middleIndex;
            } else if (value < middleElement) {
                //If the searched element is less than the middle element,
                //the last index becomes the index before the middle one
                lastIndex = middleIndex - 1;
            } else {
                //If the searched element is more than the middle element,
                //the first index becomes the next index after the middle one
                firstIndex = middleIndex + 1;
            }
        }

        //Return -1 if the element is not found
        return -1;
    }
}
