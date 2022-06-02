/* eslint-disable no-unused-vars */
//PAGE D'ACCUEIL
function photographerFactory(data) {
  //fonction qui permet d'englober le return vers la fonction getUserCardDom

  function getUserCardDOM() {
    //fonction qui crée les éléments du DOM
    const { portrait, name, city, country, tagline, price, id } = data;
    const picture = `assets/photographers/${portrait}`;

    const article = document.createElement("article");
    article.setAttribute("title", "Information sur le photographe");
    article.setAttribute("tabindex", "2");

    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");

    // CREATION DU LIEN ENTRE INDEX.HTML ET PHOTOGRAPHER.HTML
    //AU CLICK
    article.addEventListener("click", () => {
      window.location.href = `photographer.html?id=${id}`;
    });
    //AU CLAVIER AVEC LA TOUCHE ENTREE
    article.addEventListener("keypress", () => {
      window.location.href = `photographer.html?id=${id}`;
    });

    img.setAttribute("src", picture);
    img.setAttribute("alt", "photo" + " " + name);
    h2.textContent = name;
    h2.setAttribute("aria-label", name);
    h3.textContent = city + ", " + country;
    h4.textContent = tagline;
    p.textContent = price + "€/jour";

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(h4);
    article.appendChild(p);
    return article;
  }
  return { getUserCardDOM };
}

//PAGE DU PHOTOGRAPHE
function photographerFactoryInfo(data) {
  function getUserMediaCardDOM() {
    const { portrait, name, city, country, tagline } = data;

    const section = document.createElement("section");
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");

    section.classList = "photographerHeader";
    div.classList = "infosPhotographe";
    h2.textContent = name;
    h2.setAttribute("tabindex", "1");
    h2.setAttribute("aria-label", name);
    h3.textContent = city + ", " + country;
    h4.textContent = tagline;

    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(h4);

    const button = document.createElement("div");
    button.classList.add("button_button");
    button.innerHTML = `<button class="contact_button" aria-label = "contacter le photographe" tabindex="2" onclick="displayModal()">Contactez-moi</button>`;

    const photoPhotographe = document.createElement("div");
    const picture = `assets/photographers/${portrait}`;
    const img = document.createElement("img");
    photoPhotographe.classList = "photo";
    img.setAttribute("alt", "photo" + " " + name);
    img.setAttribute("src", picture);

    section.appendChild(div);
    section.appendChild(button);
    section.appendChild(img);

    document.getElementById("titre_modal").innerHTML = // je cible l'id concerné et le texte déjà inscrit
      document.getElementById("titre_modal").innerHTML + "<br/>" + data.name; //je récupère le texte qui est présent dans id titre modal et j'y ajoute un retour à la ligne et le nom du photographe concerné

    return section;
  }
  return { getUserMediaCardDOM };
}
