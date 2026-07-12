class MaxBinaryHeap{
    constructor(){
        this.values=[41,39,33,18,27,12]
    }
    insert(element){
        this.values.push(element)
        this.bubbleUp()
    }
    bubbleUp(){
        let idx=this.values.length-1
        const element=this.values[idx]
        while(idx>0){
            let parentIdx=Math.floor((idx - 1) / 2);
            let parent =this.values[parentIdx]
            if(element<=parent) break;
            this.values[parentIdx]=element;
            this.values[idx]=parent;
            idx=parentIdx;
        }
    }
}

let heap=new MaxBinaryHeap()
heap.insert(55)
console.log(heap.values)


//psudocode

// INSERT(element)

//     Add element to the end of the heap

//     Set index to the last position

//     While index is greater than 0

//         Find the parent index

//         If parent is greater than or equal to element
//             Stop

//         Swap parent and element

//         Update index to the parent's index

// Insert: O(log n) (in the worst case, the element moves from the last level to the root)
// Bubble Up: O(log n)