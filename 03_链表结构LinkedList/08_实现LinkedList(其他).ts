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
    //封装私有方法
    //根据position获取节点
    private getNode(position: number){
        let index = 0;
        let current = this.head;
        while(index++ < position && current){
            current = current.next;
        }
        return current;
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
    insert(position: number, value: T):boolean{
        if(position < 0 || position > this.size) return false;
        const newNode = new Node(value);
        if(position === 0){
            newNode.next = this.head;
            this.head = newNode;
        }else{
            const previous = this.getNode(position - 1);
            newNode.next = previous!.next;
            previous!.next = newNode;
        }
            this.size++;
            return true
    }
    //删除
    removeAt(position: number){
        if(position < 0 || position > this.size) return false;
        let current = this.head;
        if(position === 0){
            this.head = current!.next;
        }else{
           const previous = this.getNode(position - 1);
           previous!.next = previous!.next!.next;
        }
        this.size--;
        return current?.value ?? null;
    }
    //获取
    get(position: number){
        if(position < 0 || position >= this.size) return false;
        return this.getNode(position)?.value ?? null;
    }
    //更新
    update(position: number, value: T){
        if(position < 0 || position >= this.size) return false;
        const node = this.getNode(position);
        node!.value = value;
        return true;
    }
    //根据值，获取索引
    indexOf(value: T){
        let index = 0;
        let current = this.head;
        while(current){
            if(current.value === value){
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }
    //根据值，删除节点
    remove(value: T){
        const position = this.indexOf(value);
        return this.removeAt(position);
    }
    //判断是否为空
    isEmpty(){
        return this.size === 0;
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
console.log("---更新update---");
ll.update(0, 'aa');
ll.tranverse();
console.log("---根据值获取索引indexOf---");
console.log(ll.indexOf('aa'));
console.log("---根据值删除节点remove---");
ll.remove('aa');
ll.tranverse();
console.log("---判断是否为空isEmpty---");
console.log(ll.isEmpty());
export {}