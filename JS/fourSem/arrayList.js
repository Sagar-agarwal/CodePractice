

class ArrayList{
	constructor(){

		this.length = 0;
		this.data = {};
	}

	push(value){

		this.data[this.length];
		this.length++;

		return;
	}

	pop(value){
		
	//	var ans = this.data[this.length - 1];
	//	delete this.data[this.length-1];
	//	this._collapseTo(this.length-1);
	//	this.length--;

		return this.delete(this.length-1);
	}

	get(index){

		return this.data[index];
	}

	delete(index){

		var ans = this.data[index];
		this._collapseTo(index);

		return ans;
	}

	_collapseTo(index){

		for (var i = index; i < this.length; i++) {
			this.data[i] = this.data[i+1];
		}
		delete this.data[this.length -1 ];
		this.length--;

	}



// ArrayList ends here	
}


var arrBasic = [10,8,4,6,3,5,2,9,7,1];
var arrAdv = [10,8,4,6,10,8,4,6,30,8,4,6,3,5,2,9,7,1,5,2,9,7,1,3,50,8,4,6,3,5,2,9,7,1,2,9,7,10,8,4,6,3,10,10,8,4,6,3,5,2,9,7,1,8,4,6,3,5,2,9,7,1,5,2,9,7,1,1,];
var arr1 = [1,3,3,5,7,9];
var arr2 = [2,4,6,6,8,8];
var arrSort = arr1.concat(arr2);



// @ Testing

// var myArr = new ArrayList;

// console.log("myArr: " + myArr.data);