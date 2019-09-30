Vue.component('fruits-item-name', {
  props: {
    fruitsItem: {
      type: Object,
      required: true,
    },
  },
  template: '<li>{{ fruitsItem.name }}</li>',
})

new Vue({
  el: '#fruits-component',
  data: {
    fruitsItems: [
      { name: '梨' },
      { name: 'イチゴ' },
    ],
  },
})

const counterButton = Vue.extend({
  template: '<span>{{ counter }}個<button @click="addToCart">追加</button></span>',
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    addToCart() {
      this.counter++
      this.$emit('increment')
    },
  },
})

new Vue({
  el: '#fruits-counter',
  components: {
    'counter-button': counterButton
  },
  data: {
    total: 0,
    fruits: [
      { name: '梨' },
      { name: 'イチゴ' }
    ],
  },
  methods: {
    incrementCartStatus() {
      this.total++
    }
  }
})
