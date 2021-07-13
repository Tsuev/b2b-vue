export default {
    state: {
        products: [],
        activeProducts: []
    },
    mutations: {
        updateStateProducts(state, products){
            state.products = products
        },

        updateStateActiveProduct(state, activeProduct){
            state.activeProducts = activeProduct
        }
    },
    actions: {
        async getCategoryProducts(ctx, productCategoryId){
            const response = await fetch(`/api/products/?id=${productCategoryId}`, {headers:{'Authorization-Token': '9a68f80d-0f3c7c56-4733c445-8ae4f75b'}})
            const products = await response.json()

            ctx.commit('updateStateProducts', products)
        },

        getActiveProduct(ctx, activeProductId){
            const activeProduct = this.state.products[activeProductId]
            console.log(activeProduct)
            ctx.commit('updateStateActiveProduct', activeProduct)
        }
    },
    getters: {
        viewProducts(state){return state.products},
        viewActiveProducts(state){return state.activeProducts}
    }
}