<script>
// importo la componenete app header
import AppHeader from './components/AppHeader.vue';
// importo la componenete 
import AppProject from './components/AppProject.vue';

export default {
  // utilizzo la componenete
  components:{
    AppHeader,
    AppProject
  }
}
</script>
<template lang="">
  <div>
    <AppHeader />
    <AppProject />
  </div>
</template>

<style lang="scss">
  @import './styles/generals.scss';
</style>
