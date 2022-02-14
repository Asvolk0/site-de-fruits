let menu = document.getElementById('menu');
let select = document.getElementById('select');
let chaud = document.getElementById('Chaud');

select.addEventListener('click', function(){
    select.classList.toggle("open");
   chaud.classList.toggle('chaud');
});
