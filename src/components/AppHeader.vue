<script>
export default {
  name: 'AppHeader'
}
</script>

<template>
  <header class="py-3">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <ul class="list-unstyled d-flex justify-content-start m-0">
            <li class="mx-3">
              <router-link to="/">HOME</router-link>
            </li>
            <li class="mx-3">
              <router-link to="/portfolio">POSTS</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="">
</style>