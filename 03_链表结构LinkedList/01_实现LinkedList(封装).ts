//创建Node节点
class Node<T>{
    value: T;
    next: Node<T> | null = null;
    constructor(value: T) {
        this.value = value;
    }
}

//创建LinkedList链表
class LinkedList<T>{
    head: Node<T> | null = null;
    private size: number = 0;
    get length() {
        return this.size;
    }
}
const ll = new LinkedList<string>();
export {}