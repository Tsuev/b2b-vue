<template>
  <div class="col-12 col-md-6 col-lg-2">
    <div class="card">
      <div class="p-4">
        <img
          class="card-img-top"
          :src="'http://test.tk-badr.ru/' + img"
          alt="Unsplash"
        />
      </div>
      <div class="card-header">
        <h5 class="card-title mb-0">{{ title }}</h5>
      </div>
      <div class="card-body">
        <p class="card-text">
            {{ title }}
        </p>
        <a @click="getActiveProduct(id)" data-bs-toggle="modal" data-bs-target="#centeredModalPrimary" class="btn btn-primary mx-auto d-block">Подробнее</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: {
        id: {
          type: String,
        },
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
      methods: mapActions(['getActiveProduct'])
};
</script>

<style>
</style>