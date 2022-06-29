let btnGet = document.querySelector('#btnGet');
let cardimginHTML = document.querySelector('#cardimg');
let carddiv = document.querySelector('#carddiv');


function getApi() {    
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
     .then(res => res.json())
     .then(data => {
        let cardimg = document.createElement('img');
        cardimg.setAttribute('src', data.cards[0].image);
        cardimg.setAttribute('alt', 'CardImage');
        carddiv.innerHTML = '';
        carddiv.appendChild(cardimg);
     })
     .catch(err => console.log(err))
}
    
btnGet.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    getApi();
});