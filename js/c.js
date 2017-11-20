
$(document).ready(function(){
	$("button").on('click',function(event) {
		console.log("adding a new row");
		addNewRow();		/* Act on the event */
	});
});
function addNewRow(){
	var names = ["name", "add", "desc", "lease", "payment", "cost", "start", "end"];
	var numOfRows = ($("#maintable tbody tr").length) + 1;
	var table = $("#maintable");
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
