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