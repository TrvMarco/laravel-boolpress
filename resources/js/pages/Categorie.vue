<template>
  <main>
    <div class="container">
      <h4>Categorie:</h4>
      <ul>
          <li v-for="category in categories" :key="category.id"><router-link class="btn-blue" :to="{ name: 'SingleCategory',  params: { slug : category.slug } }">{{category.name}}</router-link></li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
    name: 'Categorie',
    data(){
        return{
            categories:[]
        }
    },
    created(){
        axios.get('http://127.0.0.1:8000/api/categories')
        .then((response) => {
            console.log(response.data)
            this.categories = response.data;
        })
        .catch((error) => {
            console.log(error);
        })
    }
}    
</script>

<style>

</style>