import httpClient from "../../helper/httpClient"

export default {
    state: {
        orderStateColumns: [],
        orders: [],
    },
    mutations: {
        updateStateColumns(state, orderStateColumns){
            state.orderStateColumns = orderStateColumns
        }
    },
    actions: {
        getStateColumn(ctx){
            httpClient.get(ctx, '/app/order.php?cmd=list', 'updateStateColumns')
        }
    },
    getters: {
        viewStateColumns(state){return state.orderStateColumns},
    }
}