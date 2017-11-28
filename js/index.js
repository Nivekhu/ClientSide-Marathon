$(document).ready(function(){
    getLocalStorage();
    setLocalStorage();
        
})
function getLocalStorage(){
 $('input[type="text"]').each(function(){    
        var name = $(this).attr('name');
        var value = localStorage.getItem(name);
        $(this).val(value);
    }); 
 $('input[type="date"]').each(function(){    
        var name = $(this).attr('name');
        var value = localStorage.getItem(name);
        $(this).val(value);
    });
 $('#type').each(function(){
        var value = localStorage.getItem('typeSelect');
        $(this).val(value);
    });
 $('#cat').each(function(){
        var value = localStorage.getItem('catSelect');
        $(this).val(value);
    });
}
function setLocalStorage(){
$('input').on('change', function(){
    $('input[type="text"]').each(function(){    
        var name = $(this).attr('name');
        var value = $(this).val();
       localStorage.setItem(name, value);
    }); 
    $('input[type="date"]').each(function(){    
        var name = $(this).attr('name');
        var value = $(this).val();
       localStorage.setItem(name, value);
    });
});
    $('#type').change(function(){
         localStorage.setItem('typeSelect', $(this).val());
    });
    $('#cat').change(function(){
         localStorage.setItem('catSelect', $(this).val());
    });
}