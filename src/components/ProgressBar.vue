<template>
  <div v-if="auth.isAuthenticated" class="progress-bar">
    <p>Progress: {{ progress }} %</p>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "ProgressBar",

  computed: {
    ...mapState(["auth"]),
    ...mapGetters(["progress"]),
  },
};
</script>

<style scoped>
.progress-bar {
  padding: 5px;
  text-align: center;
  background: rgb(106, 248, 118);
  color: black;
}
</style>