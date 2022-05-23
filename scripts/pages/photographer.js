const url = new URL(window.location.href);
const photographerId = url.searchParams.get("id");
const menuSelect = document.querySelector(".choix");

//APPARITION HEADER + MEDIAS DU PHOTOGRAPHE

//  RECUPERATION DU JSON
async function getPhotographers () {                                  
    const response = await fetch ("data/photographers.json");  //appel du json
    const data = await response.json();   // recup des données du json
    return data;                           //  retourne les données json
}


//  APPARITION DU HEADER DE LA PAGE DU PHOTOGRAPHE

function displayData(photographers) { 

    const photographerHeader = document.querySelector(".photograph-header");
    let bannerPrix = 0;

    photographers.forEach(photographer=> {  //dans les données de tous les photographes, pour chaque photographe
        if (photographer.id == photographerId){  //si l'id du photographe est égal à l'id de photographerId dans json
        const photographerModel = photographerFactoryInfo(photographer); //creation de la const qui met en place la f. de create pour un photographe
        const userCardDOM = photographerModel.getUserMediaCardDOM();  //creation de la const qui regroupe la 1ère et la 2ème fonction de create pour un photographe
        photographerHeader.appendChild(userCardDOM);

        bannerPrix = photographer.price;// textcontent = prix du photographe
        console.log(bannerPrix);
    }});
        const banner_prix = document.getElementById("prix");//cible le banner au niveau du prix
        banner_prix.innerHTML = bannerPrix + "€ / jour";//insere le prix plus le texte
}

// APPARITION DES MEDIAS DE LA PAGE DU PHOTOGRAPHE ET LIGHTBOX
function displayDataMedia(medias) { 

    switch(menuSelect.value){       // MISE EN PLACE DU TRIE
            
        case "pop" :
            medias.sort (function (a, b) {
                return b.likes - a.likes;
            })
            break;

        case "date" :
            medias.sort (function (a, b) {
                return new Date(b.date) - new Date(a.date);
            })
            break;

        case "titre" :
            medias.sort (function (a, b) {
                return a.title.localeCompare (b.title);
            })
            break;
    }   
    //AFFICHAGE DU TRI SUR PAGE DU PHOTOGRAPHE
    const cartesMedias = document.querySelector("#cartes_medias");
    console.log(cartesMedias);
    cartesMedias.innerHTML = "";

    //AFFICHAGE DU TRI SUR LIGHTBOX
    const lightbox = document.querySelector(".lightbox");
    console.log(lightbox);
    lightbox.innerHTML = "";

    let totalLikes = 0;
    let i = 0;
    medias.forEach(media=> {
        if (media.photographerId == photographerId){
            const mediaModel = mediaFactory (media);
            const userMediaDOM = mediaModel.getUserMediaDOM();
            cartesMedias.appendChild(userMediaDOM);
            createMediaLightboxDom(media);

            totalLikes += media.likes;
        }
    })
    ajoutLikes();   //appel de la fonction de gestion des likes, pour agir aussi si les medias sont triés

    let total_likes = document.getElementById("total_likes");
    total_likes.innerHTML= totalLikes;// textcontent = addition des likes de base du photographe

    // EVENEMENT AU CLICK SUR LA PHOTO
    let mediaArticle = document.querySelector("#cartes_medias");
    for(let i = 0; i < mediaArticle.childNodes.length; i++){
        mediaArticle.childNodes[i].childNodes[0].addEventListener("click", function (){
            mediaLocal(i+1);
            open();
            createIconeLightboxDom ();
        })

    //EVENEMENT AU CLAVIER SUR LA PHOTO
        mediaArticle.childNodes[i].childNodes[0].addEventListener("keypress", function (e){
            if(e.key == "Enter"){
            mediaLocal(i+1);
            open();
            createIconeLightboxDom ();
            }
        });
    }
    
}
//  MISE EN PLACE DE LA GESTION DES LIKES

function ajoutLikes(){
    const coeurs = document.querySelectorAll(".coeur");// je cible le span des coeurs
    console.log (coeurs);
    coeurs.forEach(e => {

        //EVENEMENT AU CLICK
        e.addEventListener("click", function(){// au click sur l'element

            const nbreLike = e.parentElement.children[1];//creation constante qui cible le nbre de like
    
            nbreLike.textContent++;// j'aoute 1 au nbre de like
            let totalLikes = document.getElementById("total_likes");// je cible le total des likes dans le bandeau
            totalLikes.innerHTML++; // j'ajoute 1 a ce total
        });

        //EVENEMENT AU CLAVIER AVEC TOUCHE ENTREE
        e.addEventListener("keypress", function(){

            const nbreLike = e.parentElement.children[1];
    
            nbreLike.textContent++;
            let totalLikes = document.getElementById("total_likes");
            totalLikes.innerHTML++;                         
        });
    });
}

//  ACTIVE LES FONCTIONS PRECEDENTES (PHOTOGRAPHE ET MEDIAS)
async function display(){                                              
    const {photographers, media} = await getPhotographers();  //créat de la const qui doit récupérer les données json  via la f. fetch
    displayData(photographers); 
    displayDataMedia(media);

    menuSelect.onchange = function (){displayDataMedia(media)};
}
display (); 




