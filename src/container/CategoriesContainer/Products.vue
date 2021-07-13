<template>
  <div class="container-fluid p-0">
    <div class="row">
        <ProductCard
            v-for="(product, index, array) in viewProducts.data" :key="index"
            :title="product.NAME"
            :img="product.image"
            :arrayData="array"
        />

    </div>
    <Modal/>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductCard from '@/components/ProductCard/ProductsCard.vue'
import Modal from '@/components/Modal/Modal'

export default {
    components: {ProductCard, Modal},
    computed: mapGetters(['viewProducts']),
    methods: {
      ...mapActions(['getCategoryProducts', 'getActiveProduct']),
    },
    async mounted(){this.getCategoryProducts()}
}
</script>

<style>

</style>