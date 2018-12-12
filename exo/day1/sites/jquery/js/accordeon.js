var j = jQuery.noConflict();
j(document).ready(function() {

j('.soufflet').hide();
//.on est un gestionnaire d'évènement
j('#accordeon p').on('click', function(){
    console.log('click ok');
    });

    
});