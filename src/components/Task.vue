<template>
  <div class="hello">
    <input type="text" v-model="name">
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: String,
      isDone: Boolean,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
