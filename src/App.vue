<script>
// importo la componenete app header
import AppHeader from './components/AppHeader.vue';


export default {
  // utilizzo la componenete
  components:{
    AppHeader
  }
}
</script>
<template lang="">
  <div>
    <AppHeader />
    <router-view></router-view>
    
  </div>
</template>

<style lang="scss">
  @import './styles/generals.scss';
</style>
