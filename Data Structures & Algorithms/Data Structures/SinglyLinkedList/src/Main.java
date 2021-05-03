import linkedList.SinglyLinkedList;

public class Main {
    public static void main(String[] args) {

        SinglyLinkedList<Integer> nums = new SinglyLinkedList<>();

        nums.addLast(1);
        nums.addLast(2);
        nums.addLast(3);
        nums.addLast(4);

        System.out.println(nums.deleteLast());
        System.out.println(nums.deleteLast());
        System.out.println(nums.deleteLast());

        System.out.println();

        nums.display();
    }
}
