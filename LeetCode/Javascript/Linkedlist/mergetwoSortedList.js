// Merge Two Sorted Lists

        // You are given the heads of two sorted linked lists list1 and list2.

        // Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

        // Return the head of the merged linked list.

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }

var mergeTwoLists = function(list1, list2) {

    // Create a dummy node. It helps us easily build the merged list.
    let dummy = new ListNode(0);

    // 'current' always points to the last node in the merged list.
    let current = dummy;

    // Continue while both lists still have nodes.
    while (list1 !== null && list2 !== null) {

        // Compare the current nodes of both lists.
        if (list1.val <= list2.val) {

            // Attach list1's current node.
            current.next = list1;

            // Move list1 to its next node.
            list1 = list1.next;

        } else {

            // Attach list2's current node.
            current.next = list2;

            // Move list2 to its next node.
            list2 = list2.next;
        }

        // Move current forward because a new node was added.
        current = current.next;
    }

    // One list is finished.
    // Attach whichever list still has remaining nodes.
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    // Skip the dummy node and return the real head.
    return dummy.next;
};

let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

let list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);


let result = mergeTwoLists(list1, list2);

console.log(result)


//O(n)
//space O(1)