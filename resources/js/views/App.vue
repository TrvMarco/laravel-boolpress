<template>
    <div>
        <BaseHeader/>
        <router-view></router-view>
        <BaseFooter/>
    </div>
</template>

<script>
import BaseHeader from '../components/macro/BaseHeader.vue';
import BaseFooter from '../components/macro/BaseFooter.vue';

export default {
    name: 'App',
    data(){
        return{
            posts:[]
        };
    },
    components:{
        BaseHeader,
        BaseFooter
    }
}
</script>

<style>

</style>