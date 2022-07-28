<template>
    <main>
        <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card my-3" v-for="post in posts" :key="post.id">
                <h5 class="card-header">{{post.title}}</h5>
                <div class="card-body">
                    <p class="card-text">{{post.content}}</p>
                    <li><router-link :to="{ name: 'SinglePost' }">Contatti</router-link></li><a href="#" class="btn btn-primary">Visualizza i dettagli</a>
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