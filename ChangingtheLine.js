/*SList: Prepend Val
Create prependVal(ListNode,val,before) to insert a new ListNode with val immediately before the node containing before (or at end, if no node contains before). Return the new list.

SList: Append Val
Create appendVal(list,val,after) that inserts a new ListNode containing given val immediately after the node containing after (or at end, if after not found). Return the new list.

SList: Remove Val
Create removeVal(ListNode,val). Given a pointer to the head ListNode, remove the node with the given val. Return the new list. What will you do if val is not found?*/

function ListNode(val){
    this.val = val;
    this.next = null;
}

function SList(){
    this.head = null;
}

function Display(list){
    var runner = list.head;
    console.log("List of values:");
    while(runner != null)
    {
        console.log(runner.val);
        runner = runner.next;
    }
}

var firstNode = new ListNode(42);
var secondNode = new ListNode(86);
var thirdNode = new ListNode(101);
var fourthNode = new ListNode(520);

var myList = new SList();
myList.head = firstNode;

firstNode.next = secondNode;
secondNode.next = thirdNode;
thirdNode.next = fourthNode;

function prependVal(list, val, before)
{
    var newNode = new ListNode(val);
    var runner = list.head;
    if(runner == before)
    {
        list.head = newNode;
        newNode.next = runner;
        return list;
    }
    while(runner != null)
    {
        if(runner.next == before) //if this runner's next next node is the node "before" we are in the right place
        {
            runner.next = newNode;
            newNode.next = before;
            break;
        }
        runner = runner.next;
        if(runner.next == null)
        {
            runner.next = newNode;
            break;
        }
    }

    return list;
}

function appendVal(list, val, after)
{
    var newNode = new ListNode(val);
    var runner = list.head;
    if(runner == after)
    {
        var runnerPointer = runner.next;
        runner.next = newNode;
        newNode.next = runnerPointer;
        return list;
    }
    while(runner != null)
    {
        if(runner == after)
        {
            var runnerPointer = runner.next;
            runner.next = newNode;
            newNode.next = runnerPointer;
            break;
        }
        runner = runner.next;
        if(runner.next == null)
        {
            runner.next = newNode;
            break;
        }
    }

    return list;
}

function removeVal(list, val)
{
    var runner = list.head;
    if(runner.val == val)
    {
        list.head = runner.next;
        runner.next = null;
        return list;
    }
    while(runner != null)
    {
        if(runner.next.val == val)
        {
            var nodeToRemove = runner.next;
            runner.next = runner.next.next;
            nodeToRemove.next = null;
            break;
        }
        runner = runner.next;
        if(runner.next == null)
            console.log("Reached end of this list without finding a node of val " + val);
    }

    return list;
}

Display(myList);
prependVal(myList, 1, secondNode);
Display(myList);

appendVal(myList, 30, thirdNode);
Display(myList);

removeVal(myList, 42);
Display(myList);