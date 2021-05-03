package linkedList;

public class Node<T> {
    private T nodeValue;
    private Node<T> nextNode;

    public Node(T nodeValue) {
        this.nodeValue = nodeValue;
        this.nextNode = null;
    }

    public Node(T nodeValue, Node<T> nextNode) {
        this(nodeValue);
        this.nextNode = nextNode;
    }

    public T getNodeValue() {
        return nodeValue;
    }

    public void setNodeValue(T nodeValue) {
        this.nodeValue = nodeValue;
    }

    public Node<T> getNextNode() {
        return nextNode;
    }

    public void setNextNode(Node<T> nextNode) {
        this.nextNode = nextNode;
    }
}
