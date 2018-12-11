function retourCharriot(){
    return '<br />';
}

retourChariot2 = function () {
    return '<br />';
}
var retourChariot3 = function () {
    return '<br />';
};

$(document).ready(function() {
    

    var varNumber = 9;
    var varText = 'hello world';

    let varBoolean = true; // let depuis ECMA script6
    let test2 = 555;
    let test3 = '99'; 
    if(test3 == 99){
        console.log('test3 vaut : ' + test3);
        console.log('le type de test3 vaut : ' + $.type(test3));
    }


    if(test2 === 555){ // === valeur et type plus rapide car pas de conversion avant test, type cohersion
        var toto = 1; // visible dans la portée globale
        let titi = 33; // visible dans le contexte local, sera supprimé en dehors de if 
    }

    //console.log(varNumber);
    //console.log($.type(varNumber));

    //console.log(varText);
    //console.log($.type(varText));

    //console.log(toto);
    //console.log(titi); // erreur variable non définie dans le contexte
    let developpeur = { // objet litéral
        prenom: 'freddy', 
        //languageTexte: 'jQuery mais aussi le C#',
        afficher: function(message){
            alert(message);
        },
        afficherLong: function(){
            alert( this.prenom + ' adore le language ' + this.language);
        },
        languages:{
            1: 'Javascript',
            2: 'PHP',
            3: 'TypeScript'
        },
        ide:{
            1: 'PHP Storm',
            2: 'Visual Studio Code',
            3: 'Eclipse'
        },
        OS: ['Windows', 'MacOS', 'Linux'],
        nombrePremiers: [2, 3, 5, 7, 11]
    };

    $('#content2').append(retourCharriot());
    $('#content2').append(retourChariot3);

    $.each(developpeur, function (etiquette, valeur) {
        if($.type(valeur) === 'object'){
            $('#content2').append(etiquette +  ' : <br /><ul class="' + etiquette + '">');
            $.each(valeur, function (etq, val) {
                $('#content2 ul.' + etiquette).append('<li> ' + val  + '</li>');

              });
        } 
        else if($.type(valeur) !== 'function' && valeur !== null){
         $('#content2').append(etiquette + ' : ' + valeur + retourCharriot());
        }
    });

    console.log(developpeur.languages);
});

