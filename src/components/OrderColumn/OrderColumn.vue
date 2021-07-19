<template>
  <div class="col-12 col-lg-6 col-xl-3">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">Upcoming</h5>
      </div>
      <div class="card-body p-3">
        <div id="tasks-upcoming">
          <OrderCard/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderCard from '@/components/OrderCard/OrderCard.vue'

export default {
  components: {
    OrderCard
  },
  props: ['title']    
};
</script>

<style>
</style>