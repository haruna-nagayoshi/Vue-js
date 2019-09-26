const items = [
    {
        name: 'pencil',
        price: 100,
        quantity: 2,
    },
    {
        name: 'note',
        price: 150,
        quantity: 1,
    },
];

const vm = new Vue({
    el: '#app',
    data: {
        message: '増税だよ！！！',
        items: items,
    },
    filters: {
        numberWithDelimiter: function (value) {
            if (! value) {
                return 0;
            }

            return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        }
    },
    computed: {
        totalPrice: function () {
            return this.items.reduce(function (sum, item) {
                return sum + (item.price * item.quantity);
            }, 0)
        },

        totalPriceWithTax: function () {
            return Math.floor(this.totalPrice * 1.1);
        },

        canBuy: function () {
            return this.totalPrice >= 1000;
        }
    }
});
