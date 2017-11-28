$(document).ready(function(){
	getStorage();
	initializeFields();
	$("#tabb4 button").on('click',function(event){
		addNewRowGroup4('#tabb4');
	});
	$("button").not('#tabb4').on('click', function(event) {
		console.log("adding a new row --" + " user pressed button id " + event.target.id);
		addNewRow(event);		/* Act on the event */
		setStorage();
	});
	$("#tabb4").on('keypress keyup blur change load','input',function(event){
		$("#tabb4"+ " span").text('$ ' + getCost()); //Set total to tabletotal span tag
	});
	$("table").on('keypress keyup blur change','input',function(event){
		setStorage(); /* sets storage on keyup */
	});
});
function initializeFields(){
	$("#tabb4"+ " span").text('$ ' + getCost());
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

function setStorage(){
	$('input').each(function(){
		$(this).keyup(function(){
			$(this).attr('value', $(this).val());
		});
	});

	var html = $('#tabb1 tbody').html();
	localStorage.setItem('tabb1', html);
	
	html = $('#tabb2 tbody').html();
	localStorage.setItem('tabb2', html);
	
	html = $('#tabb3 tbody').html();
	localStorage.setItem('tabb3', html);
	
	html = $('#tabb4 tbody').html();
	localStorage.setItem('tabb4', html);
}


function getStorage(){
	
	$('#tabb1 tbody').empty();
	var html = localStorage.getItem('tabb1');
	$('#tabb1 tbody').append(html);

	$('#tabb2 tbody').empty();
	html = localStorage.getItem('tabb2');
	$('#tabb2 tbody').append(html);

	$('#tabb3 tbody').empty();
	html = localStorage.getItem('tabb3');
	$('#tabb3 tbody').append(html);

	$('#tabb4 tbody').empty();
	html = localStorage.getItem('tabb4');
	$('#tabb4 tbody').append(html);
}
