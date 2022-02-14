// banane

let overlayBanane = document.querySelector('.overlayBanane');
let fruitsBanane = document.querySelector('.fruitsBanane');
let fruitsHoverBanane = document.querySelector('.fruitsHoverBanane');


function clickOverlayBanane() {
    overlayBanane.classList.toggle('overlayClickBanane');
}

function clickFruitsBanane(){
    fruitsBanane.classList.toggle('fruitsClickBanane');
    fruitsHoverBanane.classList.toggle('fruitsHoverBanane');
    setTimeout(clickOverlayBanane, [400]);
}

fruitsBanane.addEventListener('click', clickFruitsBanane);

// fraise

let overlayFraise = document.querySelector('.overlayFraise');
let fruitsFraise = document.querySelector('.fruitsFraise');
let fruitsHoverFraise = document.querySelector('.fruitsHoverFraise');


function clickOverlayFraise() {
    overlayFraise.classList.toggle('overlayClickFraise');
}

function clickFruitsFraise(){
    fruitsFraise.classList.toggle('fruitsClickFraise');
    fruitsHoverFraise.classList.toggle('fruitsHoverFraise');
    setTimeout(clickOverlayFraise, [400]);
}

fruitsFraise.addEventListener('click', clickFruitsFraise);

// kiwi

let overlayKiwi = document.querySelector('.overlayKiwi');
let fruitsKiwi = document.querySelector('.fruitsKiwi');
let fruitsHoverKiwi = document.querySelector('.fruitsHoverKiwi');


function clickOverlayKiwi() {
    overlayKiwi.classList.toggle('overlayClickKiwi');
}

function clickFruitsKiwi(){
    fruitsKiwi.classList.toggle('fruitsClickKiwi');
    fruitsHoverKiwi.classList.toggle('fruitsHoverKiwi');
    setTimeout(clickOverlayKiwi, [400]);
}

fruitsKiwi.addEventListener('click', clickFruitsKiwi);

// orange

let overlayOrange = document.querySelector('.overlayOrange');
let fruitsOrange = document.querySelector('.fruitsOrange');
let fruitsHoverOrange = document.querySelector('.fruitsHoverOrange');


function clickOverlayOrange() {
    overlayOrange.classList.toggle('overlayClickOrange');
}

function clickFruitsOrange(){
    fruitsOrange.classList.toggle('fruitsClickOrange');
    fruitsHoverOrange.classList.toggle('fruitsHoverOrange');
    setTimeout(clickOverlayOrange, [400]);
}

fruitsOrange.addEventListener('click', clickFruitsOrange);

// framboise

let overlayFramboise = document.querySelector('.overlayFramboise');
let fruitsFramboise = document.querySelector('.fruitsFramboise');
let fruitsHoverFramboise = document.querySelector('.fruitsHoverFramboise');


function clickOverlayFramboise() {
    overlayFramboise.classList.toggle('overlayClickFramboise');
}

function clickFruitsFramboise(){
    fruitsFramboise.classList.toggle('fruitsClickFramboise');
    fruitsHoverFramboise.classList.toggle('fruitsHoverFramboise');
    setTimeout(clickOverlayFramboise, [400]);
}

fruitsFramboise.addEventListener('click', clickFruitsFramboise);


// banane

// const moreBanane = document.querySelector('.moreBanane');
// const btn = document.querySelector('.btn');

// function clickOverlayBanane() {
//     moreBanane.classList.toggle('moreDb');
// }

// function moreDNBanane(){
//     overlayBanane.classList.remove('overlayClickBanane');
//     setTimeout(clickOverlayBanane, [400]);
// }

// btn.addEventListener('click', moreDNBanane);