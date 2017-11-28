$(document).ready(function(){
$("table").on('keypress keyup blur change','input',function(event){
		var tableId = $(event.target).closest('table').attr('id'); //find table ID
		$("#"+tableId+ " span").text('$ ' + calculateTotal(tableId)); //Set total to tabletotal span tag
	});
	$("button").on('click', function(event) {
		addNewRow(event);		/* Act on the event */
	});
});
//calculates sum
function calculateTotal(tableId){
	return getCost(tableId) + getAdditions(tableId) - getDeletions(tableId);
}
//Calculates the total from all the inputs with the name = 'cost' w/ the appropraite table
function getCost(tableId){
	var group = $("#" + tableId +" input[name='cost']"); //find input with name = 'cost'
	var length = group.length;
	var total = 0;
	for(var i = 0; i < length; i++){
		if(group[i].value.length > 0){
		total += parseFloat(group[i].value); //Find sum
		}
	}
	return total;
}
//Calculates the total from all the inputs with the name = 'adds' w/ the appropraite table
function getAdditions(tableId){
	var group = $("#" + tableId +" input[name='adds']");
	var length = group.length;
	var total = 0;
	for(var i = 0; i < length; i++){
		if(group[i].value.length > 0){
		total += parseFloat(group[i].value);
		}
	}
	return total;
}
//Calculates the total from all the inputs with the name = 'Deletions' w/ the appropraite table
function getDeletions(tableId){
	var group = $("#" + tableId +" input[name='dels']");
	var length = group.length;
	var total = 0;
	for(var i = 0; i < length; i++){
		if(group[i].value.length > 0){
		total += parseFloat(group[i].value);
		}
	}
	return total;
}
//Dynamically adds new row to the DOM tree
function addNewRow(event){
	 var group = event.target.id;
	var names = ["year", "cost", "adds", "dels"];
	var table = $("#t" + group);
	var newRow = $("<tr>");
	for(var i = 0; i < names.length; i++){
		var newData = $("<td>").append($('<input>').attr({
			type: 'text',
			name : names[i],
			value: ''
		}))
		newRow.append(newData);
	}
	table.append(newRow);
}
