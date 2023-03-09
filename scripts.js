let shoppingCart = []
const productCards = document.querySelectorAll('.product-card')
//const productCards = [...document.querySelectorAll(".product-card")];
console.log(productCards, typeof productCards)

let btn = document.querySelector('.btn');



for (let card in productCards) {
    if (typeof productCards[card] == 'object') {

        let cardEl = productCards[card];
        //console.log(cardEl);

        const cardObj = {
            imgURL: cardEl.children[0].src,
            name: cardEl.children[1].innerText,
            price: 100,
        }
        //console.log(cardObj)

        let cardBtn = cardEl.children[3];

        cardBtn.addEventListener('click', () => {
            //lägg i varukorgen
            shoppingCart.push(cardObj)
            localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
            console.log('hej');
        })
    }
    
}









// btn.addEventListener('click', function() {
//     console.log('hej');
// })