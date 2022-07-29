<template>
  <main>
    <div class="container pb-5">
        <h2>{{post.title}}</h2>
        <hr>
        <p>{{post.content}}</p>
        <div v-if="post.tags.length > 0">
          <span>Tag associati al post:</span> 
          <ul>
            <li v-for="tag in post.tags" :key="tag.id">{{tag.name}}</li>
          </ul>
        </div>
    </div>
  </main>
</template>

<script>
export default {
    name: 'SinglePost',
    data(){
      return{
        post: null
      }
    },
    created(){
        axios.get(`/api/posts/${this.$route.params.slug}`)
        .then((response) => {
            console.log(response.data)
            this.post = response.data;
        })
        .catch((error) => {
            console.log(error);
        })
    }
}
</script>

<style>

</style>