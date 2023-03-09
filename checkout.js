let posters = JSON.parse(localStorage.getItem("shoppingCart"));
let productCardBig = document.querySelector('.product-card-big');


posters.forEach(poster => {
    productCardBig.innerHTML = `
    <article class="big-imgs">
    <img src="/imgs/${poster.name.toLowerCase()}.svg" alt="poster">
    <h2>${poster.name}</h2>
    <h3>${poster.price}</h3>
    
    <button>Ta bort från varukorgen</button>
    </article>
`
});