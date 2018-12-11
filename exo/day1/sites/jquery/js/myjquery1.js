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
    //wait(5000);
    $('#content').html('<h1>jQuery est trop facile</h1>');
    //$('#content').prepend('texte inséré avant');
    //$('#content').append('texte inséré après');

    $('a.link').text('Visiter le site de jQuery').attr('href', 'https://www.jquery.com');
    $('#mycheck').prop('checked');
    console.log($('#mycheck').prop('checked'));
    console.log($('a.link').text());
    console.log($('#content').text()); // récupère que le texte
    console.log($('#content').html()); // récupère le texte et les balises html
});


console.log($);
console.log("test pour debug");
