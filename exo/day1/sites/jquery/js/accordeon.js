"use strict";
var j = jQuery.noConflict();
const t = 300; // constante globale
j(document).ready(function () {

    j('.soufflet').hide();
    //.on est un gestionnaire d'évènement
    j('#accordeon p').on('click', function (event) {
        //console.log('click ok');
        //console.log(event);
        //j(this).next().show();

        let $s = j(this); // $ pour dire que c'est un objet jQuery
        let s = j(this); // cela marche mais on ne voit pas que c'est un objet jQuery
        const time = 300; // constante locale
        j('#accordeon p i.fa-chevron-down').removeClass('fa-rotate-90');

        // Fermeture du soufflet
        if ($s.hasClass('opened')) {
            $s.next().slideUp(time);
            $s.find('i.fa-chevron-right').removeClass('fa-rotate-90');
            //console.log($s.children('i'));
        } else {
            // Ouverture du soufflet et fermeture des autres
            $s.next().slideDown(time).siblings('.soufflet').slideUp(time);
            $s.siblings('p').removeClass('opened').find('i.fa-chevron-right').removeClass('fa-rotate-90');
            //$s.find('i','fa-chevron-down').toggleClass('fa-chevron-right');
            $s.find('i.fa-chevron-right').addClass('fa-rotate-90');
            //console.log($s.children('i','fas fa-chevron-down'));
        }

        $s.toggleClass('opened');
    });


});