(function(){
    console.log('carrousel');
    /* ----------------------------------------Initialisation des compteur */

    let index = 0,
        derniereIndex = -1;

    /* Les Elements du carrousel */
    let elCarrousel = document.querySelector('.carrousel'),
    /* Btn temporaire pour ouvrir le carrousel */
    elBtnModale = document.querySelector('.btn_modale'),
    /* Btn temporaire pour fermer le carrousel X */
    elBtnModalFermer = document.querySelector('.btn_fermer'),
    /* Btn temporaire pour droite le carrousel >>> */
    elBtnModaldroite = document.querySelector('.btn_droite'),
    /* Btn temporaire pour gauche le carrousel <<< */
    elBtnModalgauche = document.querySelector('.btn_gauche'),
    /* Figure qui contiendra l'ensamble des images du carrousel */
    elCarrousel__figure = document.querySelector('.carrousel__figure'),
    /* le formulaire qui contiendra l'ensamble des bouttons radio */
    elCarrousel__form = document.querySelector('.carrousel__form'),



    /* Les elements de la galerie */
    /* Containeur principale de la galerie */
    // elGalerie = document.querySelector('.galerie'),
    elGalerieImg = document.querySelectorAll('.galerie figure img');


    /* Etape 1 parcourir les images de la galerie */
    for (const elImg of elGalerieImg) {

        // elImg.dataset.index = index;
        ajouter_img_carrousel(elImg);
        ajouter_radio_carrousel();
        /* Ecouter sur les images de la carrousel */
        elImg.addEventListener('mousedown', function(){
            console.log('galerie');
            console.log('elImg.dataset.index'+" "+this.dataset.index);
            elCarrousel.classList.add('carrousel--ouvrir');
            elCarrousel__figure.children[this.dataset.index].classList.add('carrousel__figure__img--activer');


            elCarrousel__form.children[this.dataset.index].checked = true;

            derniereIndex = this.dataset.index;

        })
    }
      
    /**
     * Ajouter une image dans la carrousel
     * @param {*} elImg 
     */
    function ajouter_img_carrousel(elImg) {
        // elImg represente une image de la galerie.
        elImg.dataset.index = index;
        let elCarrousel__figure__img = document.createElement('img');
        elCarrousel__figure__img.setAttribute('src', elImg.getAttribute('src'));
        elCarrousel__figure__img.classList.add('carrousel__figure__img');
        elCarrousel__figure__img.dataset.index = index;
        elCarrousel__figure.appendChild(elCarrousel__figure__img);
    }

    /**
     * Ajouter une radio dans la carrousel
     * @param {*} elImg 
     */
    function ajouter_radio_carrousel() {
        let elCarrousel__form__radio = document.createElement('input');
        elCarrousel__form__radio.setAttribute('name', 'carrousel__form__radio');
        elCarrousel__form__radio.setAttribute('class', 'carrousel__form__radio');
        elCarrousel__form__radio.setAttribute('type', 'radio');
        elCarrousel__form__radio.dataset.index = index;
        index++
        elCarrousel__form.appendChild(elCarrousel__form__radio);
        
        /* ecouteur sur radio afficher une nouvelle image */
        elCarrousel__form__radio.addEventListener('mousedown', function(e){
            
            if (derniereIndex != -1) {
                elCarrousel__figure.children[derniereIndex].classList.remove('carrousel__figure__img--activer');
            }
            elCarrousel__figure.children[this.dataset.index].classList.add('carrousel__figure__img--activer');
            derniereIndex = this.dataset.index;
            
        });
    }

    elBtnModale.addEventListener('mousedown', function(){
        elCarrousel.classList.add('carrousel--ouvrir');
    })
    /*  */
    elBtnModalFermer.addEventListener('mousedown', function(){
        elCarrousel.classList.remove('carrousel--ouvrir');
    })





    elBtnModaldroite.addEventListener('mousedown', function(){

        let elRadio = document.querySelectorAll('.carrousel__form__radio');
        let elRadioActuel;
        
        for (let i = 0; i < elCarrousel__figure.children.length; i++) {

            for (let j = 0; j < elRadio.length; j++) {
                if (elRadio[j].checked === true) {
                    elRadioActuel = elRadio[j];
                }
            }

            if (elCarrousel__figure.children[i].classList.contains('carrousel__figure__img--activer')) {
                elCarrousel__figure.children[i].classList.remove('carrousel__figure__img--activer');
                if (i == 3) {
                    
                    elCarrousel__figure.children[0].classList.add('carrousel__figure__img--activer');
                    elRadioActuel.previousElementSibling.previousElementSibling.previousElementSibling.checked = true;
                    break;


                } else {
                    elCarrousel__figure.children[i+1].classList.add('carrousel__figure__img--activer');
                    elRadioActuel.nextElementSibling.checked = true;
                    break;
                }
            }
        }
    })





    elBtnModalgauche.addEventListener('mousedown', function(){
        console.log('click gauche');
        let elRadio = document.querySelectorAll('.carrousel__form__radio');
        let elRadioActuel;

        for (let i = 0; i < elCarrousel__figure.children.length; i++) {

            for (let j = 0; j < elRadio.length; j++) {
                if (elRadio[j].checked === true) {
                    elRadioActuel = elRadio[j];
                }
            }

            if (elCarrousel__figure.children[i].classList.contains('carrousel__figure__img--activer')) {
                elCarrousel__figure.children[i].classList.remove('carrousel__figure__img--activer');
                if (i == 0) {
                    elCarrousel__figure.children[3].classList.add('carrousel__figure__img--activer');
                    elRadioActuel.nextElementSibling.nextElementSibling.nextElementSibling.checked = true;
                    break;


                } else {
                    elCarrousel__figure.children[i-1].classList.add('carrousel__figure__img--activer');
                    elRadioActuel.previousElementSibling.checked = true;

                    break;
                }

            }
            
        }
    })

})();