//CREATION DES ELEMENTS DU DOM POUR LA LIGHTBOX

const lightbox = document.createElement("div");
lightbox.className = "lightbox";
document.body.appendChild(lightbox);

//CREATION DES BOUTONS LIGHTBOX

//FONCTION APPELEE DANS PHOTOGRAPHER.JS DANS displayDataMedia()
function createIconeLightboxDom() {
  //Creation des chevrons
  const iconePrecedent = document.createElement("i");
  iconePrecedent.className = "fas fa-chevron-left";
  iconePrecedent.id = "precedent";
  iconePrecedent.setAttribute("onclick", "mediaNav(-1)");
  iconePrecedent.setAttribute("aria-label", "image précédente");
  lightbox.appendChild(iconePrecedent);

  const iconeSuivant = document.createElement("i");
  iconeSuivant.className = "fas fa-chevron-right";
  iconeSuivant.setAttribute("onclick", "mediaNav(1)");
  iconeSuivant.id = "suivant";
  iconeSuivant.setAttribute("aria-label", "image suivante");
  lightbox.appendChild(iconeSuivant);

  //création de la croix pour fermer la lightbox
  const iconeClose = document.createElement("i");
  iconeClose.className = "fas fa-times";
  iconeClose.id = "close";
  iconeClose.setAttribute("aria-label", "fermer la lightbox");
  lightbox.appendChild(iconeClose);
  iconeClose.addEventListener("click", close);
}

// CREATION IMAGE ET TITRE
//FONCTION APPELEE DANS PHOTOGRAPHER.JS DANS displayDataMedia()
function createMediaLightboxDom(data) {
  const mediaLightbox = document.createElement("div");
  mediaLightbox.className = "lightbox_media";
  const lien = document.createElement("a");

  const { title, image, video } = data;

  if ("video" in data) {
    //si une video est dans la data du photographe
    const photoVideo = document.createElement("video");
    const mp4 = `assets/photographers/${video}`;
    const source = document.createElement("source");

    photoVideo.setAttribute("controls", " ");
    lien.setAttribute("href", mp4);
    source.setAttribute("src", mp4);
    source.setAttribute("alt", title);
    source.setAttribute("type", "video/mp4");
    photoVideo.appendChild(source);
    lien.appendChild(photoVideo);
    mediaLightbox.appendChild(lien);
  } else {
    //sinon image se trouvant dans la data du photographe
    const img = document.createElement("img");
    const photo = `assets/photographers/${image}`;
    lien.setAttribute("href", photo);
    img.setAttribute("src", photo);
    img.setAttribute("alt", "photo" + " " + title);
    lien.appendChild(img);
    mediaLightbox.appendChild(lien);
  }

  //elements du DOM sous les medias
  const titrePhotoLightbox = document.createElement("h3");
  titrePhotoLightbox.className = "titreLightbox";
  titrePhotoLightbox.textContent = title;

  lightbox.appendChild(mediaLightbox);
  mediaLightbox.appendChild(titrePhotoLightbox);
}
