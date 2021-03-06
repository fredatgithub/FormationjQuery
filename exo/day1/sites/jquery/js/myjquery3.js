function retourCharriot(){
    return '<br />';
}

var j = jQuery.noConflict();

j(document).ready(function() {
    let languages = ['javascript', 'PHP', 'ASP', 'Python'];

    console.log(typeof(languages)); // déprécié ne pas utilisé
    console.log(j.type(languages)); // à utiliser
    console.log('nombre de langages : ' + languages.length);
    // ajouter des éléments à la fin du tableau
    languages.push('C#');
    languages.push('vb');
    console.log('nombre de langages : ' + languages.length);
    console.log('le premier élément de language est : ' + languages[0]);
    //supprimer le dernier élément d'un tableau
    languages.pop();

    //supprimer le premier élément d'un tableau
    languages.shift();
    console.log(languages);

    // ajoute un élément au début d'un tableau
    languages.unshift('JS');
    console.log(languages);

    //insérer un élément à un endroit donné
    languages.splice(3, 0, 'VB');
    console.log(languages);

    languages.splice(3, 0, 'Lisp', 'Smaltalk');
    console.log(languages);

    languages.push({compilateur: 'Gcc'});
    console.log(languages);

    let myJson = JSON.stringify(languages);
    console.log(myJson);

    let reverse = JSON.parse(myJson);
    console.log(myJson);

});
