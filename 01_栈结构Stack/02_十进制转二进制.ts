import AarryStack from './ArrayStack'

function decimalToBinary(decNumber: number) {
    const stack = new AarryStack<number>()
    while(decNumber > 0) {
        stack.push(decNumber % 2)
        decNumber = Math.floor(decNumber / 2)
    }
    let binaryString = ''
    while(!stack.isEmpty()) {
        binaryString += stack.pop()
    }
    return binaryString
}

console.log(decimalToBinary(100))
