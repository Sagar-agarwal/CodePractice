var insertRec = function (obj, tableName){
	var gr = new GlideRecord(tableName);

	for(i = 0; i <= obj.length; i++ ){
		gr.newRecord();
		gr.assign_to = obj[i].assign_to;
		gr.priority = obj[i].priority;
		gr.insert();
	}

}