<script>
// importo la componenete app header
import AppHeader from './components/AppHeader.vue';
// importo la componenete 
import PortFolio from './pages/PortFolio.vue';

export default {
  // utilizzo la componenete
  components:{
    AppHeader,
    PortFolio
  }
}
</script>
<template lang="">
  <div>
    <AppHeader />
    
  </div>
</template>

<style lang="scss">
  @import './styles/generals.scss';
</style>
