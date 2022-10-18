(function(){

    /* Les Elements du carrousel */
    let elCarrousel = document.querySelector('.carrousel')
    /* Btn temporaire pour ouvrir le carrousel */
    let ellBtnModale = document.querySelector('.btn_modale')
    /* Btn temporaire pour fermer le carrousel X */
    let elBtnModalFermer = document.querySelector('.btn_fermer')
    /* Figure qui contiendra l'ensamble des images du carrousel */
    elCarrousel__figure = document.querySelector('.carrousel__figure')
    /* le formulaire qui contiendra l'ensamble des bouttons radio */
    elCarrousel__form = document.querySelector('.carrousel__form')


    /* Les elements de la galerie */
    /* Containeur principale de la galerie */
    let elGalerie = document.querySelector('.galerie')
    let elGalerieImg = document.querySelectorAll('.galerie figure img')

    /* Etape 1 parcourir les images de la galerie */
    console.log('ok');
    
    for (const elImg of elGalerieImg) {
        console.log(elImg.getAttribute('src'));

        ajouter_img_carrousel(elImg);
        // ajouter_radio_carrousel();
    };

    function ajouter_img_carrousel(elImg) {
        // elImg represente une image de la galerie.
        let elCarrousel__figure__img = document.createElement('img');
        elCarrousel__figure__img.setAttribute('src', elImg.getAttribute('src'));
        elCarrousel__figure__img.classList.add('carrousel__figure__img');
        elCarrousel__figure.appendChild(elCarrousel__figure__img);
    }



    ellBtnModale.addEventListener('mousedown', function(){
        elCarrousel.classList.add('carrousel--ouvrir');
    })
    /*  */
    elBtnModalFermer.addEventListener('mousedown', function(){
        elCarrousel.classList.remove('carrousel--ouvrir');
    })





})();


/*

nbSecondes <- 0;
nbJours <- 0;
Ecrire ('Voyez entrer le nombre de secondes');
Lire nbSecondes;
nbJourss <- nbSecondes 24/60/60;                <-dodelati
Ecrire:"Nombre de jours est:" nbJourss;


*/