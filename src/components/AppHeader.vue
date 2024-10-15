<script>
export default {
//   name: 'AppHeader'
props: {
    menu: Array
}
}
</script>

<template>
  <header class="py-3">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <ul class="list-unstyled d-flex justify-content-start m-0">
            <li class="mx-3" v-for="item, index in menu" :key="index">
              <!-- <router-link to="/">HOME</router-link> -->
               <a href="#">{{ item.label }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="">
</style>