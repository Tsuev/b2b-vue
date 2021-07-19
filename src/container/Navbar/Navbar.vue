<template>
  <nav id="sidebar" class="sidebar">
    <div class="sidebar-content js-simplebar" data-simplebar="init">
      <div class="simplebar-wrapper m-0">
        <div class="simplebar-height-auto-observer-wrapper">
          <div class="simplebar-height-auto-observer" />
        </div>
        <div class="simplebar-mask">
          <div class="simplebar-offset" style="right: 0px; bottom: 0px">
            <div
              class="simplebar-content-wrapper"
              style="height: 100%; overflow: hidden scroll"
            >
              <div class="simplebar-content" style="padding: 0px">
                <!-- svelte-ignore a11y-missing-attribute -->
                <a @click='$router.push({name: "home"})' class="sidebar-brand">
                  <img src="@/assets/img/logo.png" alt="" />
                </a>

                <!-- Для того кто сел читать мой код, всё происходит здесь -->
                <ul class="sidebar-nav mt-3">
                  <li class="sidebar-item" v-for="tabs in getMainTabs" :key="tabs.id">
                    <a @click='$router.push({name: tabs.route})' class="sidebar-link">
                      <span v-html="tabs.icon"></span>
                      <span class="align-middle">
                        {{ tabs.title }}
                      </span>
                    </a>
                  </li>
                  <li class="sidebar-header">Каталог</li>
                  <li class="sidebar-item" v-for="categories in getCategories" :key="categories.ID">
                    <a @click="getCategoryProducts(categories.ID); $router.push({name: 'viewProductCategoryPage', params: {id: categories.ID}})" class="sidebar-link">
                      <span class="align-middle">
                        {{ categories.NAME }}
                      </span>
                    </a>
                  </li>
                </ul>
                <!-- Для того кто сел читать мой код, всё происходит здесь -->
              </div>
            </div>
          </div>
        </div>
        <div
          class="simplebar-placeholder"
          style="width: auto; height: 1485px"
        />
      </div>
      <div
        class="simplebar-track simplebar-horizontal"
        style="visibility: hidden"
      >
        <div class="simplebar-scrollbar" style="width: 0px; display: none" />
      </div>
      <div
        class="simplebar-track simplebar-vertical"
        style="visibility: visible"
      >
        <div
          class="simplebar-scrollbar"
          style="
            height: 269px;
            transform: translate3d(0px, 0px, 0px);
            display: block;
          "
        />
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: mapGetters(['getMainTabs', 'getCategories']),
    methods: mapActions(['getCategoryProducts','getNewCategories']),
    async mounted(){
      this.getNewCategories()
    }
};
</script>

<style>
  .align-middle, .sidebar-header{
    font-size: 16px !important;
  }

  .sidebar-link{
    padding: .300rem 1.625rem !important;
  }
</style>