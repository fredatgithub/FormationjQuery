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

    console.log(varNumber);
    console.log($.type(varNumber));

    console.log(varText);
    console.log($.type(varText));

    console.log(toto);
    //console.log(titi); // erreur variable non définie dans le contexte
});

