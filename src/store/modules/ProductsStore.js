export default {
    state: {
        products: []
    },
    mutations: {
        updateStateProducts(state, products){
            state.products = products
        }
    },
    actions: {
        async getProducts(ctx){
            const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
            const products = await response.json()

            ctx.commit('updateStateProducts', products)
        }
    },
    getters: {
        viewProducts(state){return state.products}
    }
}