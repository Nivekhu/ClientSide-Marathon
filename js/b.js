$(document).ready(function(){
	$("button").on('click', function(event) {
		console.log("adding a new row --" + " user pressed button id " + event.target.id);
		
		addNewRow(event);		/* Act on the event */
	});
});
function addNewRow(event){
	 var group = event.target.id;
	var names = ["year", "make", "model", "bodysize", "vin", "yearP1", "purchase", "rowTax"];
	var numOfRows = ($( "#" + group + " tbody tr").length) + 1;
	console.log(numOfRows);
	var table = $("#" + group);
	var newRow = $("<tr>");
	for(var i = 0; i < names.length; i++){
		var newData = $("<td>").append($('<input>').attr({
			type: 'text',
			value: '',
			name : 'row' + numOfRows + names[i]
		}))
		newRow.append(newData);
	}
	table.append(newRow);
}
