<template>
    <p class="message">ひとこと: {{ msg }}</p>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'へろー'
      }
    }
  }
</script>

<style scoped>
    .message {
        color: #42b983;
    }
</style>
