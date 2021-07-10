<template>
  <div class="container-fluid p-0">
    <div class="row">
        <ProductCard
            v-for="product in viewProducts" :key="product.id"
            :title="product.title"
            :img="product.url"
        />

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductCard from '@/components/ProductCard/ProductsCard.vue'

export default {
    components: {
        ProductCard
    },
    computed: mapGetters(['viewProducts']),
    methods: mapActions(['getProducts']),
    async mounted(){this.getProducts()}
}
</script>

<style>

</style>