"use strict";
var j = jQuery.noConflict();

function unicID() {
    return Math.round(new Date().getTime() + (Math.random() * 100));
}

j(document).ready(function () {
    j('.btnaction').on('click', function name(params) {
        let boutonid2 = j(this).data('buttonid');
        console.log(boutonid2);
    });
});