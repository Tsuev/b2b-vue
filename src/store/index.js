import Vue from 'vue'
import Vuex from 'vuex'
import NavbarStore from '@/store/modules/NavbarStore'
import ProductsStore from '@/store/modules/ProductsStore'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        NavbarStore,
        ProductsStore
    }
})