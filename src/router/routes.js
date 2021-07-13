import VueRouter from "vue-router";
import MainPage from '../pages/MainPage.vue'
import ProductsPage from '../pages/ProductsPage.vue'
import ThirdPage from '../pages/ThirdPage.vue'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: MainPage
    },
    {
      name: 'viewProductCategoryPage',
      path: '/products/:id',
      component: ProductsPage
    },
    {
      path: '/third',
      component: ThirdPage
    }
  ]
})