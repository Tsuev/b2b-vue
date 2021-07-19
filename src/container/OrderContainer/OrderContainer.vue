<template>
  <div class="row">
    <Column
      v-for="(colums, index) in viewStateColumns"
      :key='index'
      :title='colums.NAME'
    />
  </div>
</template>

<script>
import Column from '@/components/OrderColumn/OrderColumn.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Column
  },
  computed: mapGetters(['viewStateColumns']),
  methods: mapActions(['getStateColumn']),
  mounted(){this.getStateColumn()}
}
</script>

<style>

</style>