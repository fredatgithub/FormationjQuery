"use strict";
var j = jQuery.noConflict();
const t = 300; // constante globale
j(document).ready(function() {

j('.soufflet').hide();
//.on est un gestionnaire d'évènement
j('#accordeon p').on('click', function(event){
    //console.log('click ok');
    //console.log(event);
    //j(this).next().show();
    
   let $s = j(this); // $ pour dire que c'est un objet jQuery
   let s = j(this); // cela marche mais on ne voit pas que c'est un objet jQuery
   const time = 300; // constante locale
    if($s.hasClass('opened')){
        $s.next().slideUp(time);
    } else{
        $s.next().slideDown(time);
    }

    $s.toggleClass('opened');
    });

    
});