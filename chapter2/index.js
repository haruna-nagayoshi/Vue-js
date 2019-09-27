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
        numberWithDelimiter(value) {
            if (! value) {
                return 0;
            }

            return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        }
    },
    methods: {
        buy() {
            alert(this.totalPriceWithTax + '円のお買い上げ、ありがとうございます。')
            this.items.forEach(item => {
                item.quantity = 0;
            })
        }
    },
    computed: {
        totalPrice() {
            return this.items.reduce(function (sum, item) {
                return sum + (item.price * item.quantity);
            }, 0)
        },
        totalPriceWithTax() {
            return Math.floor(this.totalPrice * 1.1);
        },
        canBuy() {
            return this.totalPrice >= 1000;
        },
        errorMessageStyle() {
            return {
                border: this.canBuy ? '' : '1px solid red',
                color: this.canBuy ? '' : 'red',
            }
        }
    }
});
