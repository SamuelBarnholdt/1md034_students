var menuitem = new Vue({
    el: '#menuitems',
    data: {
        bc: 'Big Kahuna Burger',
        item1:  ':(',
        item2:  ':(',
        item3:  ':(',
        burgers: [
            { name: "bigkahuna", kcal: 500, chosen: false},
            { name: "royale", kcal: 605, chosen: false},
            { name: "animal", kcal: 650, chosen: false},
        ]

    },
    methods: {
        pick1: function () {
            this.item1 == ':)'?
                this.item1 = ':(':
                this.item1 = ':)'

        },
        pick2: function () {
            this.item2 == ':)'?
                this.item2 = ':(':
                this.item2 = ':)'
            
        },
        pick3: function () {
            this.item3 == ':)'?
                this.item3 = ':(':
                this.item3 = ':)'

        },
        orders: function() {
            var html = `<p>eymacarena</p>`;
            return html;
        }
    }
})


function listitem(){
    var out = `<item></item>`
    return out;
}

Vue.component("item", {
    template: `<li>` + 'Excellent Choice!' + `</li>`
})