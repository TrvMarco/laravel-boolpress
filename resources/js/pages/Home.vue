<template>
    <main>
        <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card my-3" v-for="post in posts" :key="post.id">
                <h5 class="card-header">{{post.title}}</h5>
                <div class="card-body">
                    <p class="card-text">{{post.content}}</p>
                    <router-link class="btn-blue" :to="{ name: 'SinglePost',  params: { slug : post.slug } }">Visualizza i dettagli</router-link>
                </div>
                </div>
            </div>
        </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'Home',
    data(){
        return{
            posts:[]
        }
    },
    created(){
        axios.get('http://127.0.0.1:8000/api/posts')
        .then((response) => {
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