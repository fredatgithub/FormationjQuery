var j = jQuery.noConflict();
j(document).ready(function() {

j('.soufflet').hide();
//.on est un gestionnaire d'évènement
j('#accordeon p').on('click', function(event){
    //console.log('click ok');
    //console.log(event);
    //j(this).next().show();
    j(this).next().slideDown(500);
    });

    
});