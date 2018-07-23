const model = {
    init: function() {
        localStorage.cats = JSON.stringify([
            {
                name: 'cat1',
                image: '../images/2290467335_d4fd0b3bd7_o.jpg',
                count: 0
            },
            {
                name: 'cat2',
                image: '../images/625069434_db86b67df8_b.jpg',
                count: 0
            },
            {
                name: 'cat3',
                image: '../images/2207159142_c11258cf67_o.jpg',
                count: 0
            },
            {
                name: 'cat4',
                image: '../images/5513402618_3ce232e01a_b.jpg',
                count: 0
            },
            {
                name: 'cat5',
                image: '../images/6330704947_42b3b83593_o.jpg',
                count: 0
            },
        ]);
    },
    add: function(id) {
        const data = JSON.parse(localStorage.cats);
        data[id].count++;
    }   
}

const view1 = {
    init: function() {
        const catList = document.querySelector('.view-1 ul');
        const catsLength = JSON.parse(localStorage.cats).length;
        for (let i = 0; i < catsLength; i++) {
            const li = document.createElement('li');
            li.innerHTML=`Cat${i+1}`
            catList.append(li);
        }
    }
}

const view2 = {
    init: function() {
        const catDisplay = document.querySelector('.view-2');
        const cats = JSON.parse(localStorage.cats);
        console.log(cats[0]);
        catDisplay.innerHTML = `
        <h2>${cats[0].name}</h2>
        <img class='cat-img' src='${cats[0].image}'>
        <p>${cats[0].count}</p>
        `
    }
}

const octopus = {
    init: function() {
        model.init();
        view1.init();
        view2.init();
    }
}
octopus.init();



// const catList = document.querySelector('#cat-list');
// const catDisplay = document.querySelector('.cat-display');
// const catImg = document.querySelector('.cat-img');
// const catTitle = document.querySelector('.cat-title');
// const catCounter = document.querySelector('.cat-counter');
// const img = document.createElement('img');
// img.classList.add('cat-img');
// catDisplay.append(img);

// for (let i = 0; i < cats.length; i++) {
//     const li = document.createElement('li');
//     li.innerHTML=`Cat${i+1}`
//     catList.append(li);

//     li.addEventListener('click', (function(id) {
//         return function() {
//             let count = cats[id].count;
//             img.src = cats[id].image;
//             img.setAttribute('data', id);
//             catTitle.innerHTML = `Cat${i+1}`
//             catCounter.innerHTML = count;
//         }
//     })(i));
// }

// img.addEventListener('click', function() {
//     const id = parseInt(this.attributes.data.value);    
//     let count = cats[id].count;
//     count++;
//     catCounter.innerHTML = count;
//     cats[id].count = count;
// });






