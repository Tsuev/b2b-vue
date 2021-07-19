<template>
  <div class="container-fluid p-0">
    <div class="row">
        <ProductCard
          v-for="(product, index, array) in viewProducts.data" :key="index"
          :title="product.NAME"
          :img="product.image"
          :arrayData="array"
          :id='product.ID'
          v-show="!getPreloderState"
        />

        <div class="position-absolute load-wrap">
          <BounceLoader
            :loading='getPreloderState'
            :color='"#4A90E2"'
            :size="150"
            :sizeUnit="'px'"
          />
        </div>

    </div>
    <Modal/>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductCard from '@/components/ProductCard/ProductsCard.vue'
import Modal from '@/components/Modal/Modal'
import { BounceLoader } from '@saeris/vue-spinners'

export default {
    components: {ProductCard, Modal, BounceLoader},
    computed: mapGetters(['viewProducts', 'getPreloderState']),
    methods: {
      ...mapActions(['getCategoryProducts', 'getActiveProduct']),
    },
    async mounted(){this.getCategoryProducts()}
}
</script>

<style>
  .load-wrap{
    left: 50%;
    top: 40%;
  }
</style>