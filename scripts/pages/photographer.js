//Mettre le code JavaScript lié à la page photographer.html

//Renvoi vers la page du photographe ciblé
const url = new URL(window.location.href);
const photographerId = url.searchParams.get("id");

async function getMedias() {
    //Récupération ressources JSON
    const response = await fetch('data/photographers.json')
    const data = await response.json()
    return data;
}

