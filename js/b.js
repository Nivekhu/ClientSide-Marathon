$(document).ready(function(){
	initializeFields();
	initializeTotal();
	$("#tabb4 button").on('click',function(event){
		addNewRowGroup4('#tabb4');
		setStorage('tabb4');
	});
	$("button").not('#tabb4').on('click', function(event) {
		console.log("adding a new row --" + " user pressed button id " + event.target.id);
		addNewRow(event);		/* Act on the event */
		setStorage(event.target.id);
	});
	$("#tabb4").on('keypress keyup blur change load','input',function(event){
		$("#tabb4"+ " span").text('$ ' + getCost()); //Set total to tabletotal span tag
	});
	$("table").on('keypress keyup blur change','input',function(event){
		var tableId = $(event.target).closest('table').attr('id');
		setStorage(tableId); /* sets storage on keyup */
	});
});
function initializeTotal(){
	$("#tabb4"+ " span").text('$ ' + getCost());
}
function initializeFields(){
	var tableId = ['tabb1','tabb2','tabb3','tabb4'];
	var length = tableId.length;
	for(var i = 0; i < length; i++){
		getStorage(tableId[i]);
	}
}
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
	var newData;
	for(var i = 0; i < names.length; i++){
		if(names[i] == "type"){
			newData = $("<td>").append($('<input>').attr({
			type: 'text',
			name : names[i],
			value: '',
			size:"15",
			maxlength:"20" 
		}))
		}
			else{
			newData = $("<td>").append($('<input>').attr({
			type: 'number',
			name : names[i],
			value: '',
			size:"15",
			maxlength:"20" 
		}))

		}
		
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
function setStorage(tableId){
	var group = tableId;
	$('input').each(function(){
		$(this).keyup(function(){
			$(this).attr('value', $(this).val());
		});
	});
	var html = $('#' + group +' tbody').html();
	localStorage.setItem(group, html);
}
function getStorage(tableId){
	var html = localStorage.getItem(tableId);
	$('#'+tableId+' tbody').empty();
	$('#'+tableId+ ' tbody').append(html);
}