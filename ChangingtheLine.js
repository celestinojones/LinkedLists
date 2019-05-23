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

prependVal(myList, 444, secondNode);
appendVal(myList, 30, thirdNode);
removeVal(myList, 42);
appendVal(myList, 1, thirdNode);

/*Linked Lists Algorithms - Set 5
SList: Move Min to Front
Create a standalone function that locates the minimum value in a linked list, and moves that node to the front of the list. Return the new list, with all nodes still present, and all (except for the new head node) in their original order.

SList: Move Max to Back
Create a standalone function that locates the maximum value in a linked list, and moves that node to the back of the list. Return the new list, with all nodes still present, and all in their original order except for the node you moved to the end of the singly linked list.

SList: Swap Nodes
Create swapNodes(list, node1, node2). Locate node1 within the list given and swap with node2. Return the modified list.

Bonus: what would you do if node1 or node2 does not exist in your list?*/

function minToFront(list)
{
    var currMinBefore = null;
    var currMin = list.head;
    var runner = list.head;
    while(runner.next != null)
    {
        if(runner.next.val < currMin.val)
        {
            currMinBefore = runner;
            currMin = runner.next;
        }
        runner = runner.next;
    }

    if(currMinBefore == null) //if the min value is already at the front
        return list;

    currMinBefore.next = currMin.next;
    var currHead = list.head;
    list.head = currMin;
    currMin.next = currHead;
    return list;
}

function maxToBack(list)
{
    var currMaxBefore = null;
    var currMax = list.head;
    var runner = list.head;
    while(runner.next != null)
    {
        if(runner.next.val > currMax.val)
        {
            currMaxBefore = runner;
            currMax = runner.next;
        }
        runner = runner.next;

        if(runner.next == null) // we're at the end now so we will make our changes
        {
            if(runner == currMax) //if the node at the end is the max value
                return list;
            if(currMaxBefore == null) //if we found no cases where anything was greater than currMax.val (the head)
            {
                runner.next = currMax;
                return list;
            }

            currMaxBefore.next = currMax.next;
            runner.next = currMax;
            currMax.next = null;
            break;
        }
    }
    
    return list;
}

function swapNodes(list, node1, node2)
{
    var preSwitch1 = null;
    var switch1 = null;
    
    var preSwitch2 = null;
    var switch2 = null;

    var runner = list.head;
    while(runner.next != null)
    {
        if(runner.next == node1)
        {
            preSwitch1 = runner;
            switch1 = runner.next;
        }
        if(runner.next == node2)
        {
            preSwitch2 = runner;
            switch2 = runner.next;
        }

        runner = runner.next;
    }
    if(switch1 == null || switch2 == null)
    {
        console.log("Couldn't find one of the nodes you wanted to switch in this list. Are you sure they're here?");
        return list;
    }
    //create new heads if the node theyre switching with is a head
    if(switch1 == list.head)
        list.head = switch2;
    if(switch2 == list.head)
        list.head = switch1;
    if(switch1.next == switch2 || switch2.next == switch1)
    {
        if(switch1.next == switch2)
        {
            var switch2Pointer = switch2.next;
            switch2.next = switch1;
            switch1.next = switch2Pointer;
            preSwitch1.next = switch2;
            return list;
        }
        if(switch2.next == switch1)
        {
            var switch1Pointer = switch1.next;
            switch1.next = switch2;
            switch2.next = switch1Pointer;
            preSwitch2.next = switch1;
            return list;
        }
    }
    //continue here if switch1 and switch2 are not directly next to each other

    preSwitch2.next = switch1;
    preSwitch1.next = switch2;
    
    var switch1Pointer = switch1.next;
    switch1.next = switch2.next;
    switch2.next = switch1Pointer;
    return list;
}

Display(myList);
minToFront(myList);
Display(myList);
appendVal(myList, 842, myList.head);
Display(myList);
maxToBack(myList);
Display(myList);

console.log("switching nodes");
Display(myList);
swapNodes(myList, secondNode, thirdNode);
Display(myList);

swapNodes(myList, firstNode, thirdNode);