var j = jQuery.noConflict();

function unicID() {
    return Math.round(new Date().getTime() + (Math.random() * 100));
}

j(document).ready(function () {
    console.log(unicID());
    console.log(Math.random());
    let compteur = 3;
    j('#add').on('click', function (e) {
        //console.log('Click sur le bouton');
        j('.square').css('background-color', '#C2C2AA').add('p.paragraphe').css('border', '1px solid #000');
        e.stopPropagation();
    });

    j('#ia').on('click', function () {
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

    j('#bing').on('click', function (e) {
        //e.preventDefault(); // annulation de l'évènement click avant qu'il n'intervienne
        j(this).attr('href', 'https://www.google.fr');
        //j(this).trigger('click');
        j(this).click();
    });

    j('#detach').on('click', function () {
        // let $liste = j('#liste').detach();
        // j('#cible').html($liste);
        // ou bien sur une seule ligne de code
        j('#liste').detach().appenTo('#cible');
    });

    j('#clone').on('click', function () {
        j('#liste').clone().attr('id', 'liste-' + unicID()).appendTo('#cible2');
        j(this).blur(); // remove focus
    });

    j('#btn1').on('click', function () {
        console.log('bouton 1 cliqué');
    });

    j('#btn2').on('click', function () {
        for (let i = 0; i < 100; i++) {
            j('#btn1').click();
        }

        alert('bouton 1 cliqué');
        let age = prompt('Quel est votre age ?');
        console.log(age);

        if(confirm('Voulez-vous aller manger ?', 'message prérempli')){
            console.log('oui allons manger');
        } else  {
            console.log('non apprenons plus de jQuery, we love it so much');
        }
    });


    // j('#content').on('click', function() {
    //     //console.log('Click sur la div content');

    // });
});