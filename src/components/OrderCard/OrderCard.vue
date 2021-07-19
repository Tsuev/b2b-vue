<template>
    <div class="card mb-3 bg-light border cursor-pointer order-card">
        <div class="card-body p-3">
            <div class="row">
                <div class="col">
                    <h3 class="text-dark">Аслан Дебишев</h3>
                    <h3 class="text-primary">Заказ №1</h3>
                    <span>10 000 руб.</span>
                </div>
                <div class="col d-flex flex-column justify-content-between align-items-end">
                    <h4>10.10.10</h4>
                    <h4>10 дн.</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .order-card{
        transition-duration: 0.3s;
    }

    .order-card:hover{
        transition-duration: 0.3s;
        transform: translateY(-2px);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.144);
    }
</style>