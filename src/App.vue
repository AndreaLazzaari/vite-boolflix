<template lang="">
  <div>
    <AppHeader />
    <AppMain />
  </div>
</template>

<script>
import { store } from './assets/js/store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  data() {
    return {
      store,
    }
  },
    components : {
        AppHeader,
        AppMain,
      },
}
</script>

<style lang="scss">
@use './styles/generals.scss'


</style>