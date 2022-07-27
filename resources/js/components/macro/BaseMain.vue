<template>
  <main>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card my-5" v-for="post in posts" :key="post.id">
                <h5 class="card-header">{{post.title}}</h5>
                <div class="card-body">
                    <p class="card-text">{{post.content}}</p>
                    <a href="#" class="btn btn-primary">Visualizza i dettagli</a>
                </div>
                </div>
            </div>
        </div>
    </div>
  </main>
</template>

<script>
export default {
    name: 'BaseMain',
    props:{
        posts: Array
    },
}
</script>

<style>

</style>