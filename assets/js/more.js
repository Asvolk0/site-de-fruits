// banane

const moreBanane = document.querySelector('.moreBanane');
const overlayBanane = document.querySelector('.overlayBanane');
const btn = document.querySelector('.btn');

function clickOverlayBanane() {
    moreBanane.classList.toggle('more');
}

function moreDNBanane(){
    overlayBanane.classList.toggle('overlayClickBanane');
    setTimeout(clickOverlayBanane, [400]);
}

btn.addEventListener('click', moreDNBanane)