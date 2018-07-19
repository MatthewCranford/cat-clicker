// const cat1 = document.querySelector('#cat1');
// const cat2 = document.querySelector('#cat2');
// const clicker1 = document.querySelector('#clicker1');
// const clicker2 = document.querySelector('#clicker2');
// let counter1 = 0;
// let counter2 = 0;

// function catClicker(clicker, counter) {
//     counter++;
//     clicker.innerHTML = `Clicks = ${counter}`;
//     return counter;
// }

const cats = [
    {
        name: 'cat1',
        image: '../images/2290467335_d4fd0b3bd7_o.jpg',
        count: 0
    },
    {
        name: 'cat2',
        image: '../images/625069434_db86b67df8_b.jpg',
        count: 0
    }
]

const catList = document.querySelector('#cat-list');
const catDisplay = document.querySelector('.cat-display');
const catImg = document.querySelector('.cat-img');
const catTitle = document.querySelector('.cat-title');
const catCounter = document.querySelector('.cat-counter');

for (let i = 0; i < cats.length; i++) {

    const li = document.createElement('li');
    const img = document.createElement('img');
    img.classList.add('cat-img');
    li.innerHTML=`Cat${i+1}`
    catList.append(li);

    
    li.addEventListener('click', (function(id) {
        return function() {
            let count = cats[id].count;
            catDisplay.append(img);
            img.src = cats[id].image;
            img.dataset = id;
            catTitle.innerHTML = `Cat${i+1}`
            catCounter.innerHTML = count;

            img.addEventListener('click', (function(id) {
                return function() {
                    console.log('test')
                    count++;
                    catCounter.innerHTML = count;
                    cats[id].count += 1;
                }
                  
                
            })(id));
        }
    })(i));
}


