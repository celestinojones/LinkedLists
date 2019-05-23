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

function SList(){
    this.head = null;
}

function AddFront(list, name){
    var rudy = new ListNode(name);
    var prevHead = list.head;
    list.head = rudy;
    rudy.next = prevHead;
    return list.head;
}

function AddLast(list, node){
    var runner = list.head;
    while(runner != null)
    {
        runner = runner.next;
        if(runner.next == null)
        {
            runner.next = node;
            break;
        }
    }
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

AddFront(myList, "Rudy");
RemoveFront(myList);

var frontOfLine = Front(myList);
console.log("Front of line: " + frontOfLine);


/*Linked Lists Algorithms - Set 2
List: Contains
Sam thinks Tad might be somewhere in a very long line waiting to attend the Superman movie. Given a ListNode pointer and a val, return whether val is found in any node in the list.

SList: Length
July 20, 2013: about 5000 people wait in line for a chance to audition for American Idol. Create a function that accepts a pointer to the first list node, and returns number of nodes in that SList.

SList: Display
Create display(node) for debugging that returns a string containing all list values. Build what you wish console.log(myList) did!*/

function Length(listHead){
    var runner = listHead;
    var count = 0;

    while(runner != null)
    {
        count++;
        runner = runner.next;
    }

    return count;
}

function Display(node){
    var runner = node;
    console.log("List of names:");
    while(runner != null)
    {
        console.log(runner.name);
        runner = runner.next;
    }
}

function Contains(list, pointer, val){
    var runner = list.head;
    while(runner != null)
    {
        if(runner == pointer && runner.name == val)
            return true;
        runner = runner.next;
    }
    return false;
}

var greg = new ListNode("Greg");
var ashe = new ListNode("Ashe");
var rochelle = new ListNode("Rochelle");

AddLast(myList, greg);
AddLast(myList, ashe);
AddLast(myList, rochelle);

Display(myList.head);

var mike = new ListNode("Mike");

console.log("Tad is in line myList: " + Contains(myList, tad, "Tad"));
console.log("Mike is in line myList: " + Contains(myList, mike, "Mike"));

console.log("Length of myList: " + Length(myList.head));