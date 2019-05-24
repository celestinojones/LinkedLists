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

/*Dedupe SList
Remove nodes with duplicate values. Following this call, all remaining nodes should have unique values. Retain only first instance of each value.

Dedupe SList Without Buffer
Can you accomplish deduplication without using a secondary buffer? What are the performance ramifications? How long would you expect the function to take to finish, if it was sent an SList of length 5 million?*/

/* 
    To answer the above question:
    Without using a secondary buffer, the runtime of the operation grows on the order of the square of the size of the input O(n^2) versus the use of a secondary buffer which would only be O(n).

    By nesting 2 loops, our inner loop runs n times for each iteration of the outer loop, and that gives us n^2 time. If our linked list has 10 items, there will be 100 checks to the nodes. if there are 5 million nodes, there will be 25 trillion checks.
*/
var valHead = new ListNode(3);

var valList = new SList();
valList.head = valHead;
var valNode1 = new ListNode(5);
var valNode2 = new ListNode(5);
var valNode3 = new ListNode(1);
var valNode4 = new ListNode(2);
var valNode5 = new ListNode(7);
var valNode6 = new ListNode(9);
var valNode7 = new ListNode(2);

valList.head.next = valNode1;
valList.head.next.next = valNode2;
valList.head.next.next.next = valNode3;
valList.head.next.next.next.next = valNode4;
valList.head.next.next.next.next.next = valNode5;
valList.head.next.next.next.next.next.next = valNode6;
valList.head.next.next.next.next.next.next.next = valNode7;


function Dedupe(list){
    var runner = list.head;
    var set = new Set();
    while(runner != null)
    {
        if(set.has(runner.next.val))
        {
            var runnerPointer = runner.next.next;
            runner.next.next = null;
            runner.next = runnerPointer;
        }
        else{
            set.add(runner.next.val);
        }
        runner = runner.next;
    }
}

function DedupeNoBuffer(list){
    var runnerOne = list.head;
    var runnerTwo = list.head;
    while(runnerOne != null)
    {
        runnerTwo = runnerOne;
        while(runnerTwo.next != null)
        {
            if(runnerOne.val == runnerTwo.next.val)
            {
                var runnerTwoPointer = runnerTwo.next;
                runnerTwo.next = runnerTwo.next.next;
                delete runnerTwoPointer;
            }
            else
                runnerTwo = runnerTwo.next;
        }
        runnerOne = runnerOne.next;
    }
}

Display(valList);
//Dedupe(valList);
DedupeNoBuffer(valList);
Display(valList);