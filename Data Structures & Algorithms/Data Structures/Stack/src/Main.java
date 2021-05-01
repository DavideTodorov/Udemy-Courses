import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Stack<Integer> numbersStack = new Stack<>(5);
        numbersStack.push(5);
        numbersStack.push(4);
        numbersStack.push(3);
        numbersStack.push(2);
        numbersStack.push(1);
        
        System.out.println(numbersStack.isEmpty());

        while (!numbersStack.isEmpty()) {
            System.out.println(numbersStack.pop());
        }

        System.out.println(numbersStack.isEmpty());
    }
}
