(function(){
    console.log('carrousel');
    /* ----------------------------------------Initialisation des compteur */

    let index = 0,
        derniereIndex = -1;

    /* Les Elements du carrousel */
    let elCarrousel = document.querySelector('.carrousel')
    /* Btn temporaire pour ouvrir le carrousel */
    let elBtnModale = document.querySelector('.btn_modale')
    /* Btn temporaire pour fermer le carrousel X */
    let elBtnModalFermer = document.querySelector('.btn_fermer')
    /* Figure qui contiendra l'ensamble des images du carrousel */
    let elCarrousel__figure = document.querySelector('.carrousel__figure')
    /* le formulaire qui contiendra l'ensamble des bouttons radio */
    let elCarrousel__form = document.querySelector('.carrousel__form')


    /* Les elements de la galerie */
    /* Containeur principale de la galerie */
    let elGalerie = document.querySelector('.galerie')
    // console.log(elGalerie);
    let elGalerieImg = document.querySelectorAll('.galerie figure img')
    console.log(elGalerieImg);

    /* Etape 1 parcourir les images de la galerie */
    
    console.log('ok');
    for (const elImg of elGalerieImg) {
        console.log('for');
        console.log(elImg.getAttribute("src"));
    
        ajouter_img_carrousel(elImg);
        ajouter_radio_carrousel();
    }
      
      
    function ajouter_img_carrousel(elImg) {
        // elImg represente une image de la galerie.
        let elCarrousel__figure__img = document.createElement('img');
        elCarrousel__figure__img.setAttribute('src', elImg.getAttribute('src'));
        elCarrousel__figure__img.classList.add('carrousel__figure__img');
        elCarrousel__figure__img.dataset.index = index;
        elCarrousel__figure.appendChild(elCarrousel__figure__img);
    }

    function ajouter_radio_carrousel() {
        let elCarrousel__form__radio = document.createElement('input');
        elCarrousel__form__radio.setAttribute('name', 'carrousel__form__radio');
        elCarrousel__form__radio.setAttribute('class', 'carrousel__form__radio');
        elCarrousel__form__radio.setAttribute('type', 'radio');
        elCarrousel__form__radio.dataset.index = index;
        index++
        elCarrousel__form.appendChild(elCarrousel__form__radio);
        /* ecouteur su sur radio afficher une nouvelle image */
        elCarrousel__form__radio.addEventListener('mousedown', function(){
            console.log(this.dataset.index);
            
            elCarrousel__figure.children[this.dataset.index].classList.add('carrousel__figure__img--activer');
        });
    }


    elBtnModale.addEventListener('mousedown', function(){
        elCarrousel.classList.add('carrousel--ouvrir');
    })
    /*  */
    elBtnModalFermer.addEventListener('mousedown', function(){
        elCarrousel.classList.remove('carrousel--ouvrir');
    })

})();