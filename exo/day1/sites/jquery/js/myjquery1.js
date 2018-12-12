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

    // day2
    
    let developpeur = { // objet litéral
        prenom: 'fred', 
        language: 'jQuery mais aussi le C#',
        afficher: function(message){
            alert(message);
        },
        afficherLong: function(){
            return this.prenom + ' adore le language ' + this.language;
        }
    };

    console.log('la variable developpeur est de type ' + $.type(developpeur));
    console.log(developpeur);
    var phrase = developpeur.prenom + ' adore le ' + developpeur.language;
    console.log(phrase);
    $('#content').append('<h2>&copy;&nbsp;' + phrase + '&nbsp </h2>');
    //developpeur.afficher('hello méthode afficher dans l objet developpeur');
    $('#content').append(developpeur.afficherLong);

    
});


//console.log($);
//console.log("test pour debug");
