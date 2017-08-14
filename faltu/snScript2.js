var query = 'u_parent_matterISNOTEMPTY';

var child = new GlideRecord('u_matter');
	child.addEncodedQuery(query);
	child.query();
	while(child.next()){

		var parentMatter = child.u_parent_matter.getDisplayValue();

		//set "Parent child" to "Parent" on parent matter
		var parent = new GlideRecord('u_matter');
			parent.addQuery('number', parentMatter);
			parent.query();
			if (parent.next()){

				//check if "parent child" field is already set to parent
				if(parent.u_parent_or_child_matter != 'Parent'){
					parent.u_parent_or_child_matter = 'Parent';
					parent.setWorkflow(false);
					parent.update();
				}
			}

		//check if "parent child" field is already already set to child
		if(child.u_parent_or_child_matter != 'Child'){
			child.u_parent_or_child_matter = 'Child';
			child.setWorkflow(false);
			child.update();
		} 

	}