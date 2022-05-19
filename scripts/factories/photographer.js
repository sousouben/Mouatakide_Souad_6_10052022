//...............PAGE D'ACCUEIL.............

 //FONCTION QUI CREE UN RETURN VERS LA FONCTION getUserCardDom()
function photographerFactory(data){  
                                
   //fONCTION QUI CREE LES ELEMENTS DU DOM     
  function getUserCardDOM() {                                     
    const {portrait, name, city, country, tagline, price, id} = data;
    const picture = `assets/photographers/${portrait}`;

  
    const article = document.createElement( "article" );
    article.setAttribute("title", "Détail du photographe");
    
    const img = document.createElement( "img" );
    const h2 = document.createElement( "h2" );
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");

      // LIEN ENTRE INDEX.HTML ET PHOTOGRAPHER.HTML
            //AU CLICK
    article.addEventListener("click", ()=>{
      window.location.href=`photographer.html?id=${id}`;  
    })  
            
    img.setAttribute("src",picture);
    img.setAttribute("alt", "photo" +" " + name);
    h2.textContent = name;
    h2.setAttribute("aria-label", name);
    h3.textContent = city +", "+ country;
    h4.textContent = tagline;
    p.textContent = price + "€/jour";
  
    article.appendChild(img)
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(h4);
    article.appendChild(p);
    return (article);
  }
return{getUserCardDOM}
}

//..............PAGE DU PHOTOGRAPHE...............

//FONCTION QUI CREE UN RETURN VERS LA FONCTION getUserMediaCardDom()
function photographerFactoryInfo(data){                                 
        
    function getUserMediaCardDOM() {                                     
      const {portrait, name, city, country, tagline} = data;

      const section = document.createElement("section");
      const div = document.createElement("div");
      const h2 = document.createElement( "h2" );
      const h3 = document.createElement("h3");
      const h4 = document.createElement("h4");

      section.classList = "photographerHeader";
      div.classList = "infosPhotographe";
      h2.textContent = name;      
      h2.setAttribute("aria-label", name);
      h3.textContent = city +", "+ country;
      h4.textContent = tagline;
      
      div.appendChild(h2);
      div.appendChild(h3);
      div.appendChild(h4);

      const photoPhotographe = document.createElement ("div");
      const picture = `assets/photographers/${portrait}`;
      const img = document.createElement( "img" );

      photoPhotographe.classList = ("photo");
      img.setAttribute("alt", "photo" +" " + name);
      img.setAttribute("src",picture);

      section.appendChild(div);
      section.appendChild(img);

      return section;
    }
  return{getUserMediaCardDOM}
}