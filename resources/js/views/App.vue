<template>
    <div>
        <BaseHeader/>
        <BaseMain :posts="posts" />
        <BaseFooter/>
    </div>
</template>

<script>
import BaseHeader from '../components/macro/BaseHeader.vue';
import BaseMain from '../components/macro/BaseMain.vue';
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
        BaseMain,
        BaseFooter
    },
    created(){
        axios.get('http://127.0.0.1:8000/api/posts')
        .then((response) => {
            console.log(response.data);
            this.posts = response.data;
        })
        .catch((error) => {
            console.log(error);
        })
    }
}
</script>

<style>

</style>