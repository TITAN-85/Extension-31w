(function(){
    console.log('Carrousel');
    let $ellBtnModale = document.querySelector('.btn_modale')
    let ellCarrousel = document.querySelector('.carrousel')

    $ellBtnModale.addEventListener('mousedown', function(){
        console.log('mouse down event');
        ellCarrousel.classList.add('carrousel--ouvrir');
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