package doubly_linked_list;

public class Node<T> {

    T nodeValue;
    Node<T> previousNode;
    Node<T> nextNode;

    public Node(T nodeValue) {
        this.nodeValue = nodeValue;
    }
}
