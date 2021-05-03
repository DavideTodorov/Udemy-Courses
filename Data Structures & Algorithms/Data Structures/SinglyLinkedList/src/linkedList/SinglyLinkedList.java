package linkedList;

public class SinglyLinkedList<T> {
    private Node<T> firstNode;

    public SinglyLinkedList() {
    }

    //Method to add a node at the beginning
    public void addFirst(T data) {
        Node<T> newNode = new Node<>(data);

        //Set the new node's next to the current first node and
        newNode.setNextNode(firstNode);
        firstNode = newNode;
    }

    //Method to add a node at the end
    public void addLast(T data) {
        Node<T> newNode = new Node<>(data);

        //Check if there are any nodes present
        if (firstNode == null) {
            firstNode = newNode;
            return;
        }

        //Find the last node
        Node<T> current = firstNode;
        while (current.getNextNode() != null) {
            current = current.getNextNode();
        }

        //Add the new node to the end
        current.setNextNode(newNode);
    }

    public T deleteFirst() {
        validateNodesArePresent();

        Node<T> currentFirst = firstNode;
        firstNode = firstNode.getNextNode();
        return currentFirst.getNodeValue();
    }

    public T deleteLast() {
        Node<T> curr = firstNode;

        //Find the last node and set it to null
        while (curr.getNextNode().getNextNode() != null) {
            curr = curr.getNextNode();
        }

        Node<T> toReturn = curr.getNextNode();
        curr.setNextNode(null);
        return toReturn.getNodeValue();
    }


    public boolean isEmpty() {
        return firstNode == null;
    }

    public void display() {
        Node<T> curr = firstNode;
        while (curr != null) {
            System.out.println(curr.getNodeValue());
            curr = curr.getNextNode();
        }
    }

    private void validateNodesArePresent() {
        if (this.isEmpty()) {
            throw new IllegalStateException("SinglyLinkedList is empty!");
        }
    }
}
