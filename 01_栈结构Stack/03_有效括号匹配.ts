import ArrayStack from "./ArrayStack";

function isValid(s: string): boolean {
    const stack = new ArrayStack<string>()
    for(let i = 0; i < s.length; i++) {
        const c = s[i]
        switch(c) {
            case '(':
                stack.push(')')
                break;
            case '[':
                stack.push(']')
                break;
            case '{':
                stack.push('}')
                break;
            default:
                if(c !== stack.pop()) return false
        }
    }
    return stack.isEmpty()
}

console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('(]'))