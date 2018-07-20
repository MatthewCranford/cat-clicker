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
const img = document.createElement('img');
img.classList.add('cat-img');
catDisplay.append(img);

for (let i = 0; i < cats.length; i++) {
    const li = document.createElement('li');
    li.innerHTML=`Cat${i+1}`
    catList.append(li);

    li.addEventListener('click', (function(id) {
        return function() {
            let count = cats[id].count;
            img.src = cats[id].image;
            img.setAttribute('data', id);
            catTitle.innerHTML = `Cat${i+1}`
            catCounter.innerHTML = count;
        }
    })(i));
}

img.addEventListener('click', function() {
    const id = parseInt(this.attributes.data.value);    
    let count = cats[id].count;
    count++;
    catCounter.innerHTML = count;
    cats[id].count = count;
});


