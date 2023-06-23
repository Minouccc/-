class ArrayQueue<T> implements IQueue<T> {
    private items: T[] = [];
    enqueue(item: T): void {
        this.items.push(item);
    }
    dequeue(): T | undefined {
        return this.items.shift();
    }
    peek(): T | undefined {
        return this.items[0];
    }
    isEmpty(): boolean {
        return this.items.length === 0;
    }
    size(): number {
        return this.items.length;
    }
}

export default ArrayQueue;
//测试
// const queue = new ArrayQueue<number>();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.dequeue();
// queue.dequeue();
// console.log(queue.peek());
// console.log(queue.size());
// console.log(queue.isEmpty());
