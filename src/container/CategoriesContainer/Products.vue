<template>
  <div class="container-fluid p-0">
    <div class="row">
        <ProductCard
            v-for="(product, index, array) in viewProducts" :key="index"
            :title="product.title"
            :img="product.url"
            :arrayData="array"
            @handler="onHandler"
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
      ...mapActions(['getProducts', 'getActiveProduct']),
      onHandler(data){
        console.log('ddd',data);
      }
    },
    async mounted(){this.getProducts()}
}
</script>

<style>

</style>