(function(){
    console.log('Carrousel');
    let ellBtnModale = document.querySelector('.btn_modale')
    let ellCarrousel = document.querySelector('.carrousel')

    let elBtnModalFermer = document.querySelector('.btn_fermer')
    ellBtnModale.addEventListener('mousedown', function(){
        console.log('mouse down event');
        ellCarrousel.classList.add('carrousel--ouvrir');
    })
    /////////////////

    elBtnModalFermer.addEventListener('mousedown', function(){
        ellCarrousel.classList.remove('carrousel--ouvrir');
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