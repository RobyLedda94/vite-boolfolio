<script>
// importo lo store
import { store } from './store.js';
// importo la componenete app header
import AppHeader from './components/AppHeader.vue';


export default {
  // utilizzo la componenete
  components:{
    AppHeader
  },
  data(){
    return{
      store
    }
  }
}
</script>
<template lang="">
  <div>
    <AppHeader :menu="store.menuItems"/>
    <router-view></router-view>
    
  </div>
</template>

<style lang="scss">
  @import './styles/generals.scss';
</style>
