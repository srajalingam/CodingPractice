class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BST{
    constructor(){
        this.root=null
    }

    insert(value){
        var newNode=new Node(value);
        if(this.root==null){
            this.root=newNode;
            return this
        }

        var current=this.root;
        while(true){
            //check duplicate & not passing
            if(value==current.value) return undefined

            if(value<current.value){
                if(current.left==null){
                    current.left=newNode
                    return this
                }
                current=current.left
            }else{
                if(current.right==null){
                    current.right=newNode
                    return this
                }
                current=current.right
            }
        }
    }

    find(value){
        if(this.root==null) return false
        var current=this.root
        var found=false

        while(current && !found){
            if(value < current.value){
                current=current.left
            }else if(value>current.value){
                current=current.right
            }else{
                found =true
            }
        }
        if(!found) return undefined
        return current
    }
    //breadth first search
    BFS(){
        var node=this.root;
        var data=[];
        var queue=[];
        queue.push(node)

        while(queue.length){
            node=queue.shift();
            data.push(node.value);
            if(node.left) {
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        return data;
    }

    //Depth first search pre order
    DFSPreOrder(){
        var data=[];
        function traverse(node){
            data.push(node.value)
            if(node.left){
                traverse(node.left)
            }
            if(node.right){
                traverse(node.right)
            }
        }
        traverse(this.root)
        return data
    }

     //Depth first search Post order
    DFSPOSTOrder(){
        var data=[];
        function traverse(node){
            if(node.left){
                traverse(node.left)
            }
            if(node.right){
                traverse(node.right)
            }
            data.push(node.value)
        }
        traverse(this.root)
        return data
    }

     //Depth first search In order
    DFSINOrder(){
        var data=[];
        function traverse(node){
            if(node.left){
                traverse(node.left)
            }
            data.push(node.value)
            if(node.right){
                traverse(node.right)
            }
          
        }
        traverse(this.root)
        return data
    }
}

var tree = new BST();
tree.insert(10)
tree.insert(8)
tree.insert(5)
tree.insert(12)
tree.insert(13)
tree.insert(2)
tree.insert(6)

console.log(tree)


console.log(tree.BFS())
//BFS -pseudocode
// 1. If the tree is empty
//       Return an empty list

// 2. Create an empty queue

// 3. Create an empty result list

// 4. Add the root node to the queue

// 5. While the queue is not empty

//       a. Remove the first node from the queue

//       b. Add the node's value to the result list

//       c. If the node has a left child
//              Add the left child to the queue

//       d. If the node has a right child
//              Add the right child to the queue

// 6. Return the result list
// Time: O(n) — every node is visited exactly once.
// Space: O(n) — in the worst case, the queue may contain up to an entire level of the tree (or many nodes for a broad tree).

console.log(tree.DFSPreOrder())
    // DFSPreOrder(node)

    // 1. If node is null
    //     Return

    // 2. Visit the current node
    //     Add node.value to the result

    // 3. DFSPreOrder(node.left)

    // 4. DFSPreOrder(node.right)

    //O(n)

console.log(tree.DFSPOSTOrder())

console.log(tree.DFSINOrder())