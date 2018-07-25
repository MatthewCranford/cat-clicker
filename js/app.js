const model = {

    currentCat: null,

    cats: [
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
        ]
}



const catList = {

    init: function() {
        this.catList = document.querySelector('#cat-list');
        this.render();  
    },

    render: function() {
        const cats = octopus.getCats();
        for (let i = 0; i < cats.length; i++) {
            const cat = cats[i];
            const li = document.createElement('li');
            li.textContent=`Cat${i+1}`
            this.catList.append(li);
            li.addEventListener('click', (function(catCopy) {
                return function() {
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                }
            })(cat));
        }
    }
}

const catView = {

    init: function() {
        this.catName = document.querySelector('#cat-name');
        this.catCounter = document.querySelector('#cat-counter');
        this.catImg = document.querySelector('#cat-img');
        this.catImg.addEventListener('click', function() {
            octopus.incrementCurrentCatCount();
        });
    },

    render: function() {
        const cat = octopus.getCurrentCat();
        this.catName.textContent = cat.name;
        this.catCounter.textContent = cat.count;
        this.catImg.src = cat.image;
    }
}

const octopus = {
    init: function() {
        model.currentCat = model.cats[0];
        catList.init();
        catView.init();
    },

    getCats: function() {
        return model.cats;
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    incrementCurrentCatCount: function() {
        model.currentCat.count++;
        catView.render();
    }
}
octopus.init();