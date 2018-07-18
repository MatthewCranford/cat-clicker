const cat1 = document.querySelector('#cat1');
const cat2 = document.querySelector('#cat2');
const clicker1 = document.querySelector('#clicker1');
const clicker2 = document.querySelector('#clicker2');
let counter1 = 0;
let counter2 = 0;


const cats = ['../images/2290467335_d4fd0b3bd7_o.jpg','../images/625069434_db86b67df8_b.jpg']

function catClicker(clicker, counter) {
    counter++;
    clicker.innerHTML = `Clicks = ${counter}`;
    return counter;
}

const catList = document.querySelector('#cat-list');
const catImg = document.querySelector('.cat-img');
const catTitle = document.querySelector('.cat-title');
const catCounter = document.querySelector('.cat-counter');

for (let i = 0; i < cats.length; i++) {

    const elem = document.createElement('li');
    elem.innerHTML=`Cat${i+1}`
    catList.append(elem);
    
    elem.addEventListener('click', (function(id) {
        return function() {
            let counter = 0;
            catImg.src = cats[id];
            catTitle.innerHTML = `Cat${i+1}`
            catCounter.innerHTML = counter;

            catImg.addEventListener('click', (function(count) {
                return function() {
                    count++;
                    catCounter.innerHTML = count;
                }
            })(counter));
        }
    })(i));
}


