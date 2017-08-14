var i = 2;
var child = new GlideRecord('u_matter');
	child.query();
	while(child.next()){

/*		child.u_parent_matter = '9cfef5b8137a7600a675bd122244b00e';
		child.setWorkflow(false);
		child.update(); 
*/
	if(i%2==1){
		child.u_parent_or_child_matter = 'Parent';
		child.setWorkflow(false);
		child.update();
		i = 2;
	}
	else{
		child.u_parent_or_child_matter = 'Child';
		child.setWorkflow(false);
		child.update();
		i = 3;
	}
	}