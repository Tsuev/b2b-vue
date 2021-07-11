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
        async getProducts(ctx){
            const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
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