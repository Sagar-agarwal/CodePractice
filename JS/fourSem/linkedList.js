// @ Linked List implementation

class LinkedList{
	constructor(){

		this.head = null;
		this.tail = null;
		this.length = 0;

	}

	push(value){
		var node = new Node(value);
		this.length++;
		if(!this.head){
			this.head = node;
		}
		else{
			this.tail.next = node;
		}
		this.tail = node;
	}

	pop(){
		return this.delete(this.length-1);

	}

	_find(index, test = this._test){
		var current = this.head;
		var i = 0;
		while(current){
			if(test(index, current.value, i, current)){
				return current;
			}
		current = current.next;
		i++;
		}
		return null;
	}

	_test(a, b){
		return a === b;
	}

	_testIndex(search, __, i){
		return search === i;
	}

	get(index){
		var node = this._find(index, this._testIndex);
		if(!node){
			return null;
		}

		return node.value;

	}

	delete(index){
		if(index === 0){
			var head = this.head;
			if(head){
				this.head = head.next;
			}
			else{
				this.head = this.tail = null;
			}
			this.length--;
			return head.value;
		}

		var node = this._find(index-1, this._testIndex);
		var excise = node.next;
		if(!excise){
			return null;
		}
		node.next = excise.next;

		
		if (!node.next) {
			this.tail = node;
		} 
		else if (!node.next.next) {
			this.tail = node.next;
		}
		this.length--;
		return excise;
	}

	median(){
		return this._find(Math.floor(this.length/2,this._testIndex)).value;
	}

	peak(){
		return this.tail.value;
	}

	insert(value, index){
		var node = new Node(value);
		var prev = this._find(index-1, this._testIndex);

		node.next = prev.next;
		prev.node = node;
		this.length++;

		return node;
	}




// LinkedList ends here
}



class Node{
	constructor(value){

		this.value = value;
		this.next = null;
	}


// Node ends here
}

/*

// Test case
var arrAdv = [10,8,4,6,10,8,4,6,30,8,4,6,3,5,2,9,7,1,5,2,9,7,1,3,50,8,4,6,3,5,2,9,7,1,2,9,7,10,8,4,6,3,10,10,8,4,6,3,5,2,9,7,1,8,4,6,3,5,2,9,7,1,5,2,9,7,1,1,];

var a = new LinkedList();
for (var i = 0; i < arrAdv.length; i++) {
	a.push(arrAdv[i]);
}

console.log("a: \n");
console.log(a);
console.log("length: \n");
console.log(a.length);
console.log("tail: \n");
console.log(a.tail);
console.log("a.head: \n");
console.log(a.head);

*/