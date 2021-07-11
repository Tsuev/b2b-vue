<template>
  <div class="col-12 col-md-6 col-lg-2">
    <div class="card">
      <img
        class="card-img-top"
        :src="img"
        alt="Unsplash"
      />
      <div class="card-header">
        <h5 class="card-title mb-0">{{ title }}</h5>
      </div>
      <div class="card-body">
        <p class="card-text">
            {{ title }}
        </p>
        <a @click="handler" href="#" data-bs-toggle="modal" data-bs-target="#centeredModalPrimary" class="btn btn-primary">Подробнее</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
      return {
        data: this.arrayData
      }
    },
    props: {
        title:{
          type: String,
          required: true,
          default: 'Нет информации'
        }, 

        img:{
          type: String,
          default: 'Нет информации'
        },

        arrayData: {
          type: Array,
          default: () => { return [] }
        } 

      },

      methods:{
        handler(){
          this.$emit('handler', this.data)
        }
      }
};
</script>

<style>
</style>