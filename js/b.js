$(document).ready(function(){
	$("#tabb4 button").on('click',function(event){
		addNewRowGroup4('#tabb4');
	});
	$("button").not('#tabb4').on('click', function(event) {
		console.log("adding a new row --" + " user pressed button id " + event.target.id);
		addNewRow(event);		/* Act on the event */
	});
	$("#tabb4").on('keypress keyup blur change load','input',function(event){
		$("#tabb4"+ " span").text('$ ' + getCost()); //Set total to tabletotal span tag
	});
});
function addNewRow(event){
	 var group = event.target.id;
	var names = ["year", "make", "model", "bodysize", "vin", "yearP1", "purchase"];
	var numOfRows = ($( "#" + group + " tbody tr").length) + 1;
	var table = $("#" + group);
	var newRow = $("<tr>");
	for(var i = 0; i < names.length; i++){
		var newData = $("<td>").append($('<input>').attr({
			type: 'text',
			value: '',
			name : names[i]
		}))
		newRow.append(newData);
	}
	table.append(newRow);
}
function addNewRowGroup4(table){
	var names = ["type", "cost"];
	var table = $(table);
	var newRow = $("<tr>");
	for(var i = 0; i < names.length; i++){
		var newData = $("<td>").append($('<input>').attr({
			type: 'text',
			name : names[i],
			value: '',
			size:"15",
			maxlength:"20" 
		}))
		newRow.append(newData);
	}
	table.append(newRow);
}
function getCost(){
	var group = $("#tabb4 input[name='cost']"); //find input with name = 'cost'
	var length = group.length;
	var total = 0;
	for(var i = 0; i < length; i++){
		if(group[i].value.length > 0){
		total += parseFloat(group[i].value); //Find sum
		}
	}
	return total;
}
