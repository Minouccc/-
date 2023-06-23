import ArrayQueue from "./ArrayQueue";

function hotpotato(elementList: string[],num: number){
    const queue = new ArrayQueue<string>()
    for(const name of elementList){
        queue.enqueue(name)
    }
    while(queue.size() > 1) {
        for(let i = 0; i < num; i++){
            const name = queue.dequeue()
            if(name) queue.enqueue(name)
        }
        queue.dequeue()
    }
    return queue.dequeue()
}

//测试
const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const winner = hotpotato(names, 7);
console.log('The winner is: ' + winner);