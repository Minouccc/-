class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number,next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}
function reverseList(head: ListNode | null): ListNode | null{
    if(head === null || head.next === null) return head
    const newHead = reverseList(head?.next ?? null)
    head.next.next = head
    head.next = null
    return newHead
}

//测试
const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)

const newHead = reverseList(head)
let current = newHead
while(current){
    console.log(current.val)
    current = current.next
}

export {}