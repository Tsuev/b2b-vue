export default { 
    methods:{
        formatter(number){ 
            return `${new Intl.NumberFormat('ru-RU').format(number)} руб.` 
        } 
    }
}