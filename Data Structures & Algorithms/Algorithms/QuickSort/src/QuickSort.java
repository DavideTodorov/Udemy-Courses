public class QuickSort {

    public static void sort(int[] array) {
        sort(array, 0, array.length - 1);
    }

    public static void sort(int[] array, int startIndex, int endIndex) {
        if (startIndex < endIndex) {
            //Find the pivot point of the array
            int q = partition(array, startIndex, endIndex);

            //Invoke sort for both the left and the right side of the array
            sort(array, startIndex, q - 1); //Sorts left side
            sort(array, q, endIndex); //Sorts right side
        }
    }

    private static int partition(int[] array, int start, int end) {
        //Find the pivot point
        int pivot = array[end];
        int i = start - 1;

        for (int j = start; j < end; j++) {
            if (array[j] <= pivot) {
                //If the element on the j index is smaller or equal to the pivot
                //we increment i and swap the elements on index i and j
                i++;
                int temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }

        //Put the pivot to the correct index and return this index
        array[end] = array[i + 1];
        array[i + 1] = pivot;

        return i + 1;
    }
}
