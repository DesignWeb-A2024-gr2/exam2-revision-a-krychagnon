// ====================================================
// =  Déclaration des variables globales              =
// ====================================================
const inputNoDA = document.getElementById('numero_da'); 
const declaration = document.getElementById('declaration');         // Le checkbox de la déclaration
const sliderNote = document.getElementById('note_estime');          // Le slider de sélection de la note estimée
const titreNote = document.getElementById('titre_note_estime');     // Le titre de la note estimé
const daIconeErreur = document.getElementById('da_icone_erreur');   // L'icone d'erreur associée au input du numéro de da
const daIconeSucces = document.getElementById('da_icone_succes');   // L'icone de succès associée au input du numéro de da
const envoieForm = document.getElementById('formulaire_examen');


const bouton = document.getElementById('bouton');

let message = document.getElementById('message_numero_da');
let messageSubmit = document.getElementById('message_declaration');

let daVrai = false;

// ====================================================
// =  Déclaration des événements                      =
// ====================================================
inputNoDA.addEventListener('input', DAValide);
sliderNote.addEventListener('input', function(){ModifierIconeNote(sliderNote.value)} );
envoieForm.addEventListener('submit', function(e){AfficherMessage(e,declaration.checked)})


// ====================================================
// =  Code qui sera exécuté au chargement de la page  =
// ====================================================



// ====================================================
// =  Déclaration des fonctions                       =
// ====================================================
function AfficherErreur()
{
    message.innerHTML = "Le DA doit contenir des chiffres  </br>  Le DA doit commencer par un 1 ou un 2  </br>  Le DA contient 7 lettres";
}

function AfficherSucces()
{
    daIconeErreur.classList.add('hidden');
    daIconeSucces.classList.remove('hidden');
}

function DAValide()
{
    
    AfficherErreur();
    const REGEX_SEULEMENT_CHIFFRE = /^\d+$/;

    let da = inputNoDA.value;

    if(REGEX_SEULEMENT_CHIFFRE.test(da))
    {
        message.innerHTML = message.innerHTML.replace("Le DA doit contenir des chiffres", "");
        
        if(da[0]== 1 || da[1] == 2)
        {
            message.innerHTML = message.innerHTML.replace("Le DA doit commencer par un 1 ou un 2", "");

            if(da.length = 7)
            {
                message.innerHTML = message.innerHTML.replace("Le DA contient 7 lettres", "");
                daVrai = true;
                AfficherSucces();
            }
            else
            {
                daVrai = false;
                return;
            }
        }
        else
        {
            daVrai = false;
            return;
        }
    }
    else
    {
        daVrai = false;
        return;
    }
}


/**
 * Modifie les classes d'un élément icone selon la valeur d'une note
 * @param {integer} note La note utilisée pour savoir qu'elle classe prendre
 */
function ModifierIconeNote(note) {
    // l'élément icone qui sera modifié
    const iconeNote = document.getElementById('icone_note');
    // On initialise les classes de l'élément à "vide"
    iconeNote.setAttribute("class", "");
    
    if(note < 20)
    {
        iconeNote.classList.add("far", "fa-sad-cry");
        
        
    }
    else if (note < 40)
    {
        iconeNote.classList.add("far", "fa-sad-tear");
        
        
    }
    else if (note < 60)
    {
        iconeNote.classList.add("far", "fa-frown");
        
    }
    else if (note < 80)
    {
        iconeNote.classList.add("far", "fa-smile");
        
    }
    else
    {   
        iconeNote.classList.add("far", "fa-grin-squint-tears");
        
    }
    
    titreNote.innerHTML= "Ma note estimée = "+ note +" %"
    
}
/**
 * Affiche un message dans la première balise small du même niveau qu'un élément html
 * @param {HTMLElement} element L'élément html de départ
 * @param {string} message Le message à afficher
 */
function AfficherMessage(e, element, message) 
{
    // const zoneMessage = element.parentElement.querySelector('small');
    // zoneMessage.innerHTML = message;

    e.preventDefault();


    if(element)
    {
        if (daVrai)
        {
            e.target.submit();
            console.log("Formulaire envoyé");
        }
    }
    else
    {
        messageSubmit.innerText = "Erreur!";
        return;
    }
}

/**
 * Génère un nombre entier aléatoirement
 * @param {int} min La valeur minimum du nombre généré
 * @param {int} max La valeur maximum du nombre généré
 * @returns Un nombre entier
 */
function ObtenirNombreAleatoire(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}



// Objet regex dont le pattern est de permettre seulement des chiffres
// const REGEX_SEULEMENT_CHIFFRE = /^\d+$/;

// Les éléments html du formulaire utilisés dans le script
// const inputNoDA = document.getElementById('numero_da');             // Le input du numéro de da
// const declaration = document.getElementById('declaration');         // Le checkbox de la déclaration
// const sliderNote = document.getElementById('note_estime');          // Le slider de sélection de la note estimée
// const titreNote = document.getElementById('titre_note_estime');     // Le titre de la note estimé
// const daIconeErreur = document.getElementById('da_icone_erreur');   // L'icone d'erreur associée au input du numéro de da
// const daIconeSucces = document.getElementById('da_icone_succes');   // L'icone de succès associée au input du numéro de da

// Initialisation de l'affichage de la bonne icone associé au numéro de da
daIconeErreur.classList.remove('hidden');
daIconeSucces.classList.add('hidden');

// /**
//  * Modifie les classes d'un élément icone selon la valeur d'une note
//  * @param {integer} note La note utilisée pour savoir qu'elle classe prendre
//  */
// function ModifierIconeNote(note) {
//     // l'élément icone qui sera modifié
//     const iconeNote = document.getElementById('icone_note');
//     // On initialise les classes de l'élément à "vide"
//     iconeNote.setAttribute("class", "");

//     // Ajout des bonnes classes selon la valeur de la note
//     // À COMPLÉTER
// }

// /**
//  * Affiche un message dans la première balise small du même niveau qu'un élément html
//  * @param {HTMLElement} element L'élément html de départ
//  * @param {string} message Le message à afficher
//  */
// function AfficherMessage(element, message = '') {
//     const zoneMessage = element.parentElement.querySelector('small');
//     zoneMessage.innerHTML = message;
// }

// /**
//  * Génère un nombre entier aléatoirement
//  * @param {int} min La valeur minimum du nombre généré
//  * @param {int} max La valeur maximum du nombre généré
//  * @returns Un nombre entier
//  */
// function ObtenirNombreAleatoire(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min +1)) + min;
// }
