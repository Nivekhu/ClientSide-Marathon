$(document).ready(function(){
	getStorage();
	$("button").on('click',function(event) {
		console.log("adding a new row");
		addNewRow();		/* Act on the event */
		setStorage();
		console.log('set storage');
	});
	$('table').on('keypress keyup blur change','input', function(){
		setStorage();
		console.log('set storage');
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
			name : names[i]
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
	var html = $('#maintable tbody').html();

	localStorage.setItem('maintable', html);
}
function getStorage(){
	var html = localStorage.getItem('maintable');
	$('#maintable tbody').empty();
	
	$('#maintable tbody').append(html);

}