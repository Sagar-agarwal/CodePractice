// @ Binary Search Tree implementation



class Tree{
	constructor(){
		this.root = null;
	}

	toObject(){
		return this.root;
	}

	add(value){
		var node = new Node(value);
		var tree = this.root;
		var treeExist = true;
		if(!this.root){
			return this.root = node;
		}

		while(true){
			if(node.value <= tree.value){
				// Go Left
				if (!tree.left){
					tree.left = node;
					return;
				}
				else{
					tree = tree.left;	
				}				
			}
			else{
				// Go Right
				if(!tree.right){
					tree.right = node;
					return;
				}
				else{
					tree = tree.right;	
				}
				
			}
		}

	}



// Tree ends here
}

class Node{
	constructor(value, left= null, right = null){

		this.value = value;
		this.left = left;
		this.right = right;
	}

}


// Testing
/*
var arr = [];
for (var i = 0; i < 1000; i++) {
	var num = Math.floor((Math.random() * 2000)/(Math.random() * 299));
	arr.push(num);
}


var a = new Tree();
for (var i = 0; i < arr.length; i++) {
	a.add(arr[i]);
}
*/