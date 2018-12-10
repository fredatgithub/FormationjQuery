function affiche(message){
    alert(message);
}

function wait(temps){
    setTimeout(() => {
        
    }, temps);
}

$(document).ready(function() {
    //affiche("hello");
    //affiche("world");
    console.log($('#content'));
    wait(5000);
    $('#content').html('<h1>jQuery est trop facile</h1>');
    $('#content').prepend('texte inséré avant');
    $('#content').append('texte inséré après');
});

console.log($);
console.log("test pour debug");
