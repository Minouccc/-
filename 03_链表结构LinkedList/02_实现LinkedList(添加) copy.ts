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
    //添加元素
    append(value: T) {
        const newNode = new Node(value);
        //如果是第一个节点
        if(!this.head){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
}
const ll = new LinkedList<string>();
export {}