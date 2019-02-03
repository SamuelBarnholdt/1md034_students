

Vue.component('burger',{
    template: `<p>okey</p>`
})

var app = new Vue({
    el: '#app',
    data: {
        bc: 'Big Kahuna Burger',
        item1:  ':(',
        item2:  ':(',
        item3:  ':(',
        burgers: [
            { name: "Big Kahuna Burger", kcal: 500, chosen: false},
            { name: "Royale With Cheese", kcal: 605, chosen: false},
            { name: "Animal Style", kcal: 650, chosen: false},
        ],
        bk: bigkahuna,
        as: animal,
        roy: royale

    },
    methods: {
        pick1: function () {
            this.item1 == ':)'?
                this.item1 = ':(':
                this.item1 = ':)'
            this.select("Big Kahuna Burger")
        },
        pick2: function () {
            this.item2 == ':)'?
                this.item2 = ':(':
                this.item2 = ':)'
            this.select("Royale With Cheese");
        },
        pick3: function () {
            this.item3 == ':)'?
                this.item3 = ':(':
                this.item3 = ':)'
            this.select("Animal Style");
        },
        select: function(name){
            for (i = 0; i < this.burgers.length; i++){
                if(this.burgers[i].name == name) this.burgers[i].chosen = !this.burgers[i].chosen;
                else null
            }
        },

    }
});


var bigkahuna = [
    {
        "name": "Big Kahuna Burger",
        "kCal": 850,
        "lactose": true,
        "gluten": true,
        "img": "img/bigkahuna.jpg"
    }
];

var animal = [
    {
        "name": "Animal Style ",
        "kCal": 850,
        "lactose": true,
        "gluten": true,
        "img": "img/innout.jpg"
    }
];

var royale = [
    {
        "name": "Royale With Cheese",
        "kCal": 850,
        "lactose": true,
        "gluten": true,
        "img": "img/royalewithcheese.jpg"
    }
];

