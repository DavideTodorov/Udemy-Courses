import java.lang.reflect.Array;

public class Stack<T> {

    private int maxSize;
    private T[] stackArray;
    private int topIndex;

    public Stack(int maxSize) {
        this.maxSize = maxSize;
        this.stackArray = (T[]) new Object[maxSize];
        this.topIndex = -1;
    }

    public void push() {
        //TODO
    }

    public T pop() {
        //TODO

        return null;
    }

    public T peek() {
        //TODO
        return null;
    }

    public boolean isEmpty() {
        //TODO
        return true;
    }
}
