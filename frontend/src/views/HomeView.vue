<template>
  <h2 v-if="this.$store.getters.LOCALIZATION == 'ru'">Результат отрисовки</h2>
  <h2 v-else>Plotter Result</h2>
  <a v-if="this.$store.getters.LOCALIZATION == 'ru'" :href="this.$store.getters.PLOT_PATH" download>
  <img v-bind:src="this.$store.getters.PLOT_PATH" class="img-fluid" alt="Ошибка отрисовки!">
  </a>
  <a v-else :href="this.$store.getters.PLOT_PATH" download>
  <img v-bind:src="this.$store.getters.PLOT_PATH" class="img-fluid" alt="Plotter error!">
  </a>

  <setting-list></setting-list>
</template>

<script>
// @ is an alias to /src


import SettingList from "@/components/SettingList";

export default {
  name: 'HomeView',
  components: {SettingList},
  data() {
    return {

    }
  }
}
</script>

<style>
.col-area {
  margin-top: 10px;
  margin-bottom: 10px;
}

.buttons {
  padding-top: 20px;
}
</style>
