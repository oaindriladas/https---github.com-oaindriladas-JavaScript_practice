// 9 0 90 80 21
// 
class node{
constructor(value)
{
    this.value=value;
    this.next = null;
}
}
let node1= new node(90);
let node2= new node(100);
node1.next= node2;
class list{
    constructor(head){
    this.head=head;
    }
}
linkedlist= new list(node1);
console.log(linkedlist);