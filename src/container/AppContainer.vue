<template>
  <div id="app">
    <div class="wrapper">
      <Navbar/>
        <div class="main">
            <HeaderContainer/>
            <main class="content">
              <router-view/>
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


