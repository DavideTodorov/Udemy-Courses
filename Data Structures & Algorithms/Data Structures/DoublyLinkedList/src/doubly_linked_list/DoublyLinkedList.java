package doubly_linked_list;

public class DoublyLinkedList<T> {
    private Node<T> head;
    private Node<T> tail;

    public DoublyLinkedList() {
    }

    public void addFirst(T data) {
        Node<T> newNode = new Node<>(data);

        if (this.isEmpty()) {
            //If the list is empty make the new node the tail
            tail = newNode;
        } else {
            //If the list is not empty make the firstNode's previous point to the newNode
            head.previousNode = newNode;
        }

        //Make the newNode the head
        newNode.nextNode = head;
        this.head = newNode;
    }

    public void addLast(T data) {
        Node<T> newNode = new Node<>(data);

        if (this.isEmpty()) {
            //If the list is empty make the head and tail point to the newNode
            head = newNode;
        } else {
            //Link the newNode with the tail
            tail.nextNode = newNode;
            newNode.previousNode = tail;
        }

        //Make the newNode the tail
        tail = newNode;
    }

    public T deleteFirst() {
        //Validate there is at least 1 node
        validatePresentElements();

        T valueToReturn = head.nodeValue;

        if (head.nextNode == null) {
            //If there is only 1 node make the tail null
            tail = null;
        } else {
            //If there are more than 1 nodes make the new head point to null
            head.nextNode.previousNode = null;
        }

        //Make the head point to it's next node, which is the new head
        head = head.nextNode;

        return valueToReturn;
    }


    public T deleteLast() {
        //Validate there is at least 1 node
        validatePresentElements();

        T valueToReturn = tail.nodeValue;

        if (head.nextNode == null) {
            //If there is only 1 node
            head = null;
            tail = null;

        } else {
            //If there are more than 1 nodes
            tail = tail.previousNode;
            tail.nextNode = null;
        }

        return valueToReturn;
    }

    public boolean insertAfter(T keyToInsertAfter, T data) {
        //Validate there is at least 1 node
        validatePresentElements();

        Node<T> current = head;
        while (current.nodeValue != keyToInsertAfter) {
            current = current.nextNode;
            if (current == null) {
                //If the current becomes null means that we haven't found the key
                // and the insertion is unsuccessful
                return false;
            }
        }

        Node<T> newNode = new Node<>(data);

        if (current == tail) {
            //If there is only 1 node make the current's node next null and the tail newNode
            current.nextNode = null;
            tail = newNode;
        } else {
            //If there are more than 1 node:
            //Make the newNode's next refer to the current's next node
            newNode.nextNode = current.nextNode;

            //Make the current's next node's previous refer to the newNode.
            // It connects the newNode to both the current node and current's next node.
            current.nextNode.previousNode = newNode;
        }

        newNode.previousNode = current;
        current.nextNode = newNode;

        //The insertion is successful and the method returns true
        return true;
    }

    public T deleteKey(T key) {
        //Validate there is at least 1 node
        validatePresentElements();

        Node<T> current = head;
        while (current.nodeValue != key) {
            current = current.nextNode;
            if (current == null) {
                //If the current becomes null means that we haven't found the key
                //and the deletion is unsuccessful
                return null;
            }
        }

        if (current == head) {
            //If the current equals the head make the head refer to the current's next node
            head = current.nextNode;
        } else {
            //If there are more than 1 nodes make current's previous' next node refer to current's next node
            current.previousNode.nextNode = current.nextNode;
        }

        if (current == tail) {
            //If the current equals the tail make the tail be current's previous node
            tail = current.previousNode;
        } else {
            //If the current doesn't equal the tail make current's next node's previous
            //refer to the current's previous
            current.nextNode.previousNode = current.previousNode;
        }


        return current.nodeValue;
    }

    public boolean isEmpty() {
        return head == null;
    }

    private void validatePresentElements() {
        if (this.isEmpty()) {
            throw new IllegalStateException("DoublyLinkedList is empty!");
        }
    }

    public void displayForward() {
        Node<T> curr = head;
        while (curr != null) {
            System.out.println(curr.nodeValue);
            curr = curr.nextNode;
        }
    }

    public void displayBackward() {
        Node<T> curr = tail;
        while (curr != null) {
            System.out.println(curr.nodeValue);
            curr = curr.previousNode;
        }
    }
}
