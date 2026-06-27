function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

function createList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;

    for (const num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }

    return dummy.next;
}

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 || l2 || carry) {
        let x = l1 ? l1.val : 0;
        let y = l2 ? l2.val : 0;

        let sum = x + y + carry;

        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next;
};

const l1 = createList([7,8,9]); 
const l2 = createList([4,5,6]); 

const result = addTwoNumbers(l1, l2);

console.log(result)