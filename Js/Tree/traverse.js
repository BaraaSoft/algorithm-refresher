
function Node(val,left,right){
    this.val = val;
    this.left = left;
    this.right = right;
}

// Iterative solution 
const preorder = (node)=>{
    let stack = [];
    let curr = node;
    while(queue.length > 0 || curr){
        if(curr){
            console.log(curr.val)
            stack.push(curr)
            curr = curr.left
        }else{
            curr = stack.pop()
            curr = curr.right
        }
    }
}

const inorder = (node)=>{
    let stack = [];
    let curr = node;
    while(queue.length > 0 || curr){
        if(curr){
            stack.push(curr);
            curr = curr.left;
        }else{
            curr = stack.pop();
            console.log(curr.val);
            curr = curr.right;
        }
    }
}

const levelorder = (root)=>{
    let queue = [root];
    console.log(root.val)
    let curr = root
    while (queue.length > 0 ) {
        curr = queue.pop() 
        if(curr.left){
            console.log(curr.left.val)
            queue.unshift(curr.left)
        }
        if(curr.right){
            console.log(curr.right.val);
            queue.unshift(curr.right)
        }
    }
}