import httpClient from "../../helper/httpClient"

 export default {
    state: {
        products: [],
        activeProduct: [],
        showPreloader: true
    },
    mutations: {
        updateStateProducts(state, products){
            state.products = products
        },

        updateStateActiveProduct(state, activeProduct){
            state.activeProduct = activeProduct
        },

        updatePreloderState(state, preloderNewState){
            state.showPreloader = preloderNewState
        }
    },
    actions: {
        getCategoryProducts(ctx, productCategoryId){
            httpClient.get(ctx, `/api/products/?id=${productCategoryId}`, 'updateStateProducts')
            ctx.commit('updatePreloderState', false)
        },

        getActiveProduct(ctx, activeProductId){
            httpClient.get(ctx, `/api/products/view/?id=${activeProductId}`, 'updateStateActiveProduct')
        }
    },
    getters: {
        viewProducts(state){return state.products},
        viewActiveProducts(state){return state.activeProduct},
        getPreloderState(state){return state.showPreloader}
    }
}