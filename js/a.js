$(document).ready(function(){
calculateTotal("ttaba1");
$("#ttaba1").on('keypress keyup blur change','input',function(event){
		var tableId = $(event.target).closest('table').attr('id');
		calculateTotal("ttaba1");
	});
	$("button").on('click', function(event) {
		//console.log("adding a new row --" + " user pressed button id " + event.target.id);
		addNewRow(event);		/* Act on the event */
	});
	calculateTotal("ttaba1");
	
});



function calculateTotal(id){
	var tableTotal = 0;
	var tableTotal = getCost(id) + getAdditions(id) - getDeletions(id);
		console.log(id);
		console.log("."+ id + "total");
		$("."+ id + "total").text(tableTotal);
}
function getCost(id){
	var group = id;
	var numOfRows = ($( "#" + group + " tbody tr").length);
	var total = 0;
	for(var i = 0; i < numOfRows; i++){
		var cost = $('[name="row' + i + 'cost"]');
		if(cost.val() != '' && !isNaN(cost.val())){
			var total = parseInt(cost.val()) + total;
		}
		else{
			console.log('error cannot get Cost' + cost.val());
		}
	}
	return total;
}
function getAdditions(id){
	var group = id;
	var numOfRows = ($( "#" + group + " tbody tr").length);
	var total = 0;
	for(var i = 0; i < numOfRows; i++){
		var cost = $('[name="row' + i + 'adds"]');
		if(cost.val() != '' && !isNaN(cost.val())){
			var total = parseInt(cost.val()) + total;
		}
		else{
			console.log('error cannot get Additions ' + cost.val());
		}
	}
	return total;
}
function getDeletions(id){
	var group = id;
	var numOfRows = ($( "#" + group + " tbody tr").length);
	var total = 0;
	for(var i = 0; i < numOfRows; i++){
		var cost = $('[name="row' + i + 'dels"]');
		if(cost.val() != '' && !isNaN(cost.val())){
			var total = parseInt(cost.val()) + total;
		}
		else{
			console.log('error cannot get Deletions ' + cost.val());
		}
	}
	return total;
}

function addNewRow(event){
	 var group = event.target.id;
	var names = ["year", "cost", "adds", "dels", "tax"];
	var numOfRows = ($( "#t" + group + " tbody tr").length) + 1;
	//console.log(numOfRows);
	var table = $("#t" + group);
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
