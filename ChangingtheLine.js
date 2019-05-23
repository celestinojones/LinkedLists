/*Linked Lists Algorithms - Set 1
List: Add Front
Rudy isn’t nice: he cuts in line in front of everyone else. Given a pointer to the first ListNode and a value, create a new node, assign it to the list head, and return a pointer to the new head node.

List: Remove Front
Ha! Rudy is getting what he deserves – kicked out of line. Given a pointer to the first node in a list, remove the head node and return the new list head node. If list is empty, return null.

List: Front
Finally, Tad and Sam reach the front of the line to get movie tickets. Oh no – only one seat remains! Who was earlier in line: Tad or Sam? Return the value (not the node) at the head of the list. If list is empty, return null. */


function ListNode(name){
    this.name = name;
    this.next = null;
}

function ListNode(name, pointer){
    this.name = name;
    this.next = pointer;
}

function SList(){
    this.head = null;
}

function PrintList(list){
    var runner = list.head;
    console.log("List of names:");
    while(runner != null)
    {
        console.log(runner.name);
        runner = runner.next;
    }
}

function AddFront(list, name){
    var rudy = new ListNode(name);
    var prevHead = list.head;
    list.head = rudy;
    rudy.next = prevHead;
    return list.head;
}

function RemoveFront(list){
    var newHead = list.head.next;
    var headToRemove = list.head;
    headToRemove.next = null;
    list.head = newHead;
    
    if(list.head == null)
    {
        return null;
    }

    return list.head;
}

function Front(list){
    if(list.head == null)
    {
        return null
    }
    return list.head.name;
}

var myList = new SList();
var tad = new ListNode("Tad");
var sam = new ListNode("Sam");

myList.head = sam;
sam.next = tad;


PrintList(myList);
AddFront(myList, "Rudy");
PrintList(myList);
RemoveFront(myList);
PrintList(myList);

var frontOfLine = Front(myList);
console.log("Front of line: " + frontOfLine);
