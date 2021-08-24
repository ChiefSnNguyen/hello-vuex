<template>
  <div v-if="auth.isAuthenticated" class="status-bar">
    <p>Done</p>
    <ul>
      <li v-for="todo in doneTodos" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "StatusBar",
  computed: {
    ...mapState(["auth"]),

    ...mapGetters(["doneTodos"]),
  },
};
</script>

<style>
.status-bar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
  align-items: center;
}

.status-bar ul {
  list-style: inside;
}
</style>