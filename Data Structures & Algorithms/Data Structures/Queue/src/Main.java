public class Main {

    public static void main(String[] args) {

        Queue<Integer> integerQueue = new Queue<>(5);
        integerQueue.insert(1);
        integerQueue.insert(2);
        integerQueue.insert(3);
        integerQueue.insert(4);
        integerQueue.insert(5);

        for (int i = 0; i < 5; i++) {
            System.out.println(integerQueue.remove());
        }

        integerQueue.insert(6);
        integerQueue.insert(7);

        System.out.println(integerQueue.peek());
    }
}
