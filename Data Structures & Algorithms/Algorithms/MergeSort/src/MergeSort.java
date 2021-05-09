public class MergeSort {

    public static void sort(int[] inputArray) {
        sort(inputArray, 0, inputArray.length - 1);
    }

    public static void sort(int[] inputArr, int startIndex, int endIndex) {
        if (startIndex >= endIndex) {
            //We have gone through the whole array
            return;
        }
        int midIndex = (startIndex + endIndex) / 2;

        //Sort left half
        sort(inputArr, startIndex, midIndex);

        //Sort right half
        sort(inputArr, midIndex + 1, endIndex);

        //Merge the arrays together
        merge(inputArr, startIndex, midIndex, endIndex);
    }

    private static void merge(int[] inputArray, int startIndex, int midIndex, int endIndex) {
        int[] tempArray = new int[endIndex - startIndex + 1];

        //Index counter for the left side of the array
        int leftSlot = startIndex;

        //Index counter for the right side of the array
        int rightSlot = midIndex + 1;

        //Current index of the temp array
        int k = 0;

        while (leftSlot <= midIndex && rightSlot <= endIndex) {
            if (inputArray[leftSlot] < inputArray[rightSlot]) {
                //If the element on the left side of the array is smaller
                //we insert it at the current temp array index and increment leftSlot index
                tempArray[k] = inputArray[leftSlot];
                leftSlot++;
            } else {
                //If the element on the right side of the array is smaller or equal to the
                //element of the left side of the array
                //we insert it at the current temp array index and increment rightSlot index
                tempArray[k] = inputArray[rightSlot];
                rightSlot++;
            }

            //Increment temp array index
            k++;
        }

        //Copy the elements that are left to the tempArray
        if (leftSlot <= midIndex) {
            //There are elements left on the left side of the array and we copy them
            //to the temArray
            while (leftSlot <= midIndex) {
                tempArray[k] = inputArray[leftSlot];
                leftSlot++;
                k++;
            }
        } else if (rightSlot <= endIndex) {
            //There are elements left on the right side of the array and we copy them
            //to the temArray
            while (rightSlot <= endIndex) {
                tempArray[k] = inputArray[rightSlot];
                rightSlot++;
                k++;
            }
        }

        //The tempArray is completely sorted and we copy its elements
        //to the correct slots in the inputArray
        for (int i = 0; i < tempArray.length; i++) {
            inputArray[startIndex + i] = tempArray[i];
        }
    }
}
