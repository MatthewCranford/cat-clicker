const cat = document.querySelector('.cat');
const clicker = document.querySelector('.clicker');
let counter = 0;

cat.addEventListener('click', () => {
    counter++;
    clicker.innerHTML = counter;
});