<template>
    <nav class="navbar navbar-expand navbar-light navbar-bg">
        <a class="sidebar-toggle" @click="check">
            <i class="hamburger align-self-center" />
        </a>
        <Search/>
        <div class="navbar-collapse collapse">
            <ul class="navbar-nav navbar-align">
                <!-- all other -->
            </ul>
        </div>
    </nav>
</template>

<script>
import Search from '@/components/Search/Search.vue'

export default {
    components: {
        Search
    },
    methods: {
        check(){
            console.log(true);
        }
    }
}
</script>

<style>

</style>