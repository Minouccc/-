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
    //遍历
    tranverse(){
        let valueList: T[] = [];
        let current = this.head;
        while(current){
            valueList.push(current.value);
            current = current.next;
        }
        console.log(valueList.join('=>'));
    }
    //插入
    insert(position: number, value: T){
        if(position < 0 || position > this.size) return false;
        const newNode = new Node(value);
        if(position === 0){
            newNode.next = this.head;
            this.head = newNode;
        }else{
            let current = this.head;
            let previous: Node<T> | null = null;
            let index = 0;
            while(index++ < position && current){
                previous = current;
                current = current.next;
            }
            newNode.next = current;
            previous!.next = newNode;
           
        }
            this.size++;
    }
    //删除
    removeAt(position: number){
        if(position < 0 || position >= this.size) return false;
        let current = this.head;
        if(position === 0){
            this.head = current!.next;
        }else{
            let previous: Node<T> | null = null;
            let index = 0;
            while(index++ < position && current){
                previous = current;
                current = current.next;
            }
            previous!.next = current!.next ?? null;
        }
        this.size--;
        return current!.value ?? null;
    }
    //获取
    get(position: number){
        if(position < 0 || position >= this.size) return false;
        let current = this.head;
        let index = 0;
        while(index++ < position && current){
            current = current.next;
        }
        return current!.value ?? null;
    }
}
const ll = new LinkedList<string>();

ll.append('a');
ll.append('b');
ll.append('c');
ll.insert(3, 'd');
ll.tranverse();
ll.removeAt(3);
ll.tranverse();
console.log("---获取get---");
console.log(ll.get(0));
export {}