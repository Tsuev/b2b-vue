<template>
  <div id="app">
    <div class="wrapper">
      <Navbar/>
        <div class="main">
            <HeaderContainer/>
            <main class="content">
              <transition name="fade" mode="out-in">
              <router-view/>
              </transition>
            </main>
        </div>
    </div>
  </div>
</template>

<script>
  import HeaderContainer from '@/container/HeaderContainer/HeaderContainer.vue'
  import Navbar from '@/container/Navbar/Navbar.vue'
  export default{
    components: {
      HeaderContainer,
      Navbar
    }
  }
</script>

<style>
  .fade-enter-active,
  .fade-leave-active{
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to{
    opacity: 0;
  }
</style>

