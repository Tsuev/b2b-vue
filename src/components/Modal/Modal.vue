<template>
    <div class="modal fade" id="centeredModalPrimary" tabindex="-1" style="display: none;" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">Информация о товаре</h3>
                </div>
                <div class="modal-body">
                    <div class="row mb-2">
                        <div class="col-6">
                            <img class="img-fluid rounded" :src="`http://test.tkbadr.ru/${viewActiveProducts.images}`" alt="">
                            <h5 class="my-3">{{ viewActiveProducts.NAME }}</h5>
                            <div class="price-block">
                                    <h4 class="text-success">Розн. {{ viewActiveProducts.prices ? formatter(viewActiveProducts.prices[0].PRICE) : 'Нет цены'}}</h4>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="row mb-3">
                                <div class="d-flex flex-column col-12 col-sm-6">
                                    <label for="#counter">Количество</label>
                                    <input v-model="defaultCount" class="form-control" id="counter" max="10" type="number">
                                </div>
                                <div class="col-12 col-sm-6" style="padding-top: 20px;">
                                    <button class="btn btn-success">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart align-middle me-2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                        В корзину
                                    </button>
                                </div>
                            </div>
                            <div class="row">
                                <h4>Описание</h4>
                                <div class="col-12 text-dark" v-html="viewActiveProducts.DETAIL_TEXT ? viewActiveProducts.DETAIL_TEXT : 'Нет описания'"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { mapGetters } from 'vuex'
import Currency from '@/mixins/Currency' 

export default {
    data(){
        return{
            defaultCount: 1
        }
    },
    computed: mapGetters(['viewActiveProducts']),
    mixins: [Currency]
}
</script>

<style>

</style>