<template>
  <main>
    <div class="container">
        <h2>Categoria:</h2>
        <h5>{{category.name}}</h5>
    </div>
  </main>
</template>

<script>
export default {
    name: 'SingleCategory',
    data(){
      return{
        category: null
      }
    },
    created(){
        axios.get(`/api/categories/${this.$route.params.slug}`)
        .then((response) => {
            console.log(response.data)
            this.category = response.data;
        })
        .catch((error) => {
            console.log(error);
        })
    }
}
</script>

<style>

</style>