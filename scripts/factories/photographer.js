function photographerFactory(data) {
    const { name, portrait, price , tagline, city , country } = data;
    console.log(price , tagline, city , country );

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        //Variables pour la création d'éléments HTML
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}