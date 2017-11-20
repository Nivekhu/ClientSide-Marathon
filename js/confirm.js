/*returns  date formated mm/dd/yyyy*/
function getDate(){
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(dd<10){
    dd='0'+dd;
} 
if(mm<10){
    mm='0'+mm;
} 
return mm+'/'+ dd+ '/'+yyyy;
}
/*Set the the datefields and disable input*/
function setDateFields(){
	$("#signdate").val(getDate());
	$("#prepdate").val(getDate());
	$("#signdate").prop('disabled', 'true');
	$("#prepdate").prop('disabled', 'true');
}

$(document).ready(function () {
	setDateFields();
});

