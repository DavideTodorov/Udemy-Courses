import doubly_linked_list.DoublyLinkedList;

public class Main {

    public static void main(String[] args) {

        DoublyLinkedList<Integer> numbers = new DoublyLinkedList<>();

        numbers.addFirst(3);
        numbers.addFirst(2);
        numbers.addFirst(1);
        numbers.displayForward();
        numbers.displayBackward();
        System.out.println();

        numbers.addLast(4);
        numbers.addLast(5);
        numbers.displayForward();
        System.out.println();

        numbers.deleteFirst();
        numbers.deleteLast();
        numbers.displayForward();
        System.out.println();

        numbers.insertAfter(3, 9);
        numbers.displayForward();
        System.out.println();

        numbers.deleteKey(9);
        numbers.displayForward();
        System.out.println();

        numbers.deleteFirst();
        numbers.deleteFirst();
        numbers.addLast(5);
        numbers.displayForward();
        System.out.println();

        numbers.deleteLast();
        numbers.addFirst(3);
        numbers.displayForward();
        System.out.println(); //Expected: 3 and 4
    }
}
