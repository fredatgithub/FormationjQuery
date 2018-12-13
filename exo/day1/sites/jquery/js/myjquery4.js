var j= jQuery.noConflict();
j(document).ready(function() {
    let compteur = 3;
    j('#add').on('click', function(e) {
       //console.log('Click sur le bouton');
       j('.square').css('background-color', '#C2C2AA').add('p.paragraphe').css('border', '1px solid #000'); 
       e.stopPropagation();
    });

    j('#ia').on('click', function(){
        let li = '<li>ligne ' + compteur + '</li>';
        
        //j('#liste li:first').after(li);
        //j(li).insertAfter('#liste li:first');
        //j('#liste li:last').append('#liste li:last');
        j('#liste li:last').text('ligne ' + compteur);
        compteur = compteur + 1;

        //j(this).prop('disabled', true);
        //j(this).remove();
        //j(this).off();
    });

    j('#bing').on('click', function(e){
        //e.preventDefault(); // annulation de l'évènement click avant qu'il n'intervienne
        j(this).attr('href', 'https://www.google.fr');
        //j(this).trigger('click');
        j(this).click();
    });

    j('#detach').on('click', function(){
        let $liste = j('#liste').detach();
        j('#cible').html($liste);
    });

    // j('#content').on('click', function() {
    //     //console.log('Click sur la div content');
       
    // });
});
