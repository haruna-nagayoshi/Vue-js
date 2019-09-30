const auth = {
  login(id, pass) {
    window.alert('userId: ' + id + '\n' + 'password: ' + pass)
  }
}

Vue.component('user-login', {
  template: '#login-template',
  data() {
    return {
      userId: '',
      password: '',
    }
  },
  methods: {
    login() {
      auth.login(this.userId, this.password)
    }
  }
})

new Vue({
  el: '#login-example'
})
