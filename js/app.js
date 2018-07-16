const cat1 = document.querySelector('#cat1');
const cat2 = document.querySelector('#cat2');
const clicker1 = document.querySelector('#clicker1');
const clicker2 = document.querySelector('#clicker2');
let counter1 = 0;
let counter2 = 0;

function catClicker(clicker, counter) {
    counter++;
    clicker.innerHTML = `Clicks = ${counter}`;
    return counter;
}

cat1.addEventListener('click', function() {
    counter1 = catClicker(clicker1,counter1);
    
});
cat2.addEventListener('click', function() {
    counter2 = catClicker(clicker2,counter2);
});

