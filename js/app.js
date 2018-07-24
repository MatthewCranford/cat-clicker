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
        localStorage.cats = JSON.stringify(data);
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
            li.addEventListener('click', (function() {
                return function() {
                    octopus.newCat(i);
                }
            })(i));
        }
    }
}

const view2 = {
    init: function() {
        this.render(0);
        this.addClicker(0);
    },
    render: function(index) {
        const catDisplay = document.querySelector('.view-2');
        const cats = JSON.parse(localStorage.cats);
        catDisplay.innerHTML = `
        <h2>${cats[index].name}</h2>
        <img class='cat-img' src='${cats[index].image}'>
        <p>${cats[index].count}</p>
        `;
        catDisplay.children[1].addEventListener('click', function() {
            octopus.click(index);
        });
    },
}

const octopus = {
    init: function() {
        model.init();
        view1.init();
        view2.init();
    },
    newCat: function(index) {
        view2.render(index)
    },
    click: function(index) {
        model.add(index);
        view2.render(index);
    }
}
octopus.init();