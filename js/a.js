$(document).ready(function(){
	getStorage();
	initializeFields();
$("table").on('keypress keyup blur change','input',function(event){
		var tableId = $(event.target).closest('table').attr('id'); //find table ID
		$("#"+tableId+ " span").text('$ ' + calculateTotal(tableId)); //Set total to tabletotal span tag
		setStorage();
	});
	$("button").on('click', function(event) {
		addNewRow(event);		/* Act on the event */
		setStorage();
	});
});


function initializeFields(){
	var tableId = ['ttaba1','ttaba2','ttaba3','ttaba4','ttaba5','ttaba6','ttaba7','ttaba8','ttaba9'];
	var length = tableId.length;
	for(var i = 0; i < length; i++){
		$("#"+tableId[i]+ " span").text('$ ' + calculateTotal(tableId[i]));
	}
}
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


function setStorage(){
	$('input').each(function(){
		$(this).keyup(function(){
			$(this).attr('value', $(this).val());
		});
	});

	var html = $('#ttaba1 tbody').html();
	localStorage.setItem('ttaba1', html);
	
	html = $('#ttaba2 tbody').html();
	localStorage.setItem('ttaba2', html);
	
	html = $('#ttaba3 tbody').html();
	localStorage.setItem('ttaba3', html);
	
	html = $('#ttaba4 tbody').html();
	localStorage.setItem('ttaba4', html);

	html = $('#ttaba5 tbody').html();
	localStorage.setItem('ttaba5', html);

	html = $('#ttaba6 tbody').html();
	localStorage.setItem('ttaba6', html);

	html = $('#ttaba7 tbody').html();
	localStorage.setItem('ttaba7', html);

	html = $('#ttaba8 tbody').html();
	localStorage.setItem('ttaba8', html);

	html = $('#ttaba9 tbody').html();
	localStorage.setItem('ttaba9', html);

}


function getStorage(key){
	
	$('#ttaba1 tbody').empty();
	var html = localStorage.getItem('ttaba1');
	$('#ttaba1 tbody').append(html);

	$('#ttaba2 tbody').empty();
	html = localStorage.getItem('ttaba2');
	$('#ttaba2 tbody').append(html);

	$('#ttaba3 tbody').empty();
	html = localStorage.getItem('ttaba3');
	$('#ttaba3 tbody').append(html);

	$('#ttaba4 tbody').empty();
	html = localStorage.getItem('ttaba4');
	$('#ttaba4 tbody').append(html);

	$('#ttaba5 tbody').empty();
	html = localStorage.getItem('ttaba5');
	$('#ttaba5 tbody').append(html);

	$('#ttaba6 tbody').empty();
	html = localStorage.getItem('ttaba6');
	$('#ttaba6 tbody').append(html);

	$('#ttaba7 tbody').empty();
	html = localStorage.getItem('ttaba7');
	$('#ttaba7 tbody').append(html);

	$('#ttaba8 tbody').empty();
	html = localStorage.getItem('ttaba8');
	$('#ttaba8 tbody').append(html);

	$('#ttaba9 tbody').empty();
	html = localStorage.getItem('ttaba9');
	$('#ttaba9 tbody').append(html);
}