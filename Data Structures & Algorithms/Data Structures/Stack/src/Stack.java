public class Stack<T> {

    private int maxSize;
    private T[] stackArray;
    private int topIndex;

    //Initialise the Stack
    public Stack(int maxSize) {
        this.maxSize = maxSize;
        this.stackArray = (T[]) new Object[maxSize];
        this.topIndex = -1;
    }

    public void push(T element) {
        //Check if the array has reached it's max size
        if (topIndex >= maxSize - 1) {
            throw new IllegalStateException("You have reached max capacity of " + maxSize + "!");
        }

        //Add the element
        topIndex++;
        stackArray[topIndex] = element;
    }

    public T pop() {
        //Check if there are any present elements
        if (topIndex < 0) {
            throw new IllegalStateException("You have no elements in the stack!");
        }

        //Remove and return the top element
        T oldElement = stackArray[topIndex];
        topIndex--;
        return oldElement;
    }

    public T peek() {
        //Return the top element
        return stackArray[topIndex];
    }

    public boolean isEmpty() {
        //Check if there are any elements in the array
        return topIndex < 0;
    }
}
