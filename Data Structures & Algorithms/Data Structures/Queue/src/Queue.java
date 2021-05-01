public class Queue<T> {

    private int maxSize;
    private int lastIndex;
    private T[] elements;
    private int countOfElements;

    //Initialise the queue
    public Queue(int maxSize) {
        this.maxSize = maxSize;
        this.elements = (T[]) new Object[maxSize];
        this.lastIndex = -1;
    }

    public void insert(T element) {
        //Check if the queue has reached max size
        if (lastIndex >= maxSize - 1) {
            throw new IllegalStateException
                    (String.format("You have reached max size of %d!", maxSize));
        }

        //Insert element at the end of the queue
        lastIndex++;
        elements[lastIndex] = element;
        countOfElements++;
    }

    public T remove() {
        //Check if there are any present elements
        if (this.isEmpty()) {
            throw new IllegalStateException("The queue is empty!");
        }

        //Remove first element and shift the other elements to the left
        T removedElement = elements[0];

        for (int i = 1; i < countOfElements; i++) {
            elements[i - 1] = elements[i];
            elements[i] = null;
        }

        countOfElements--;
        lastIndex--;
        return removedElement;
    }

    public T peek() {
        if (countOfElements == 0) {
            return null;
        }

        return elements[0];
    }

    public boolean isEmpty() {
        return countOfElements == 0;
    }

    public int size() {
        return countOfElements;
    }
}
