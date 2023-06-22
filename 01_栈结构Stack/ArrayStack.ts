import IStack from "./IStack";
//封装一个栈
class ArrayStack<T> implements IStack<T>{
    private items: T[] = [];

    //入栈
    push(item: T): void {
        this.items.push(item)
    }

    //出栈
    pop(): T | undefined {
        return this.items.pop()
    }

    //获取栈顶元素
    peek(): T | undefined {
        return this.items[this.items.length - 1]
    }

    //判断栈是否为空
    isEmpty():boolean {
        return this.items.length === 0
    }

    //获取栈的大小
    size(): number {
        return this.items.length
    }
}

//测试
// const stack = new ArrayStack<string>()
// stack.push('hello')
// stack.push('world')
// stack.push('!')
// console.log(stack.peek())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.isEmpty())
// console.log(stack.size())

export default ArrayStack;