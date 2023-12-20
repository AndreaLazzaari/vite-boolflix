<template lang="">
  <div>
    <AppHeader />
    <AppMain />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  data() {
    return {
    
    }
  },
    components : {
        AppHeader,
        AppMain,
      },
}
</script>

<style lang="scss">
  
</style>