<template>
  <header>
    <div class="container">
        <div class="row">
            <div class="col-6">
            <h2>MyBlog</h2>
            </div>
            <div class="col-6 nav_link">
                <a href="admin/home">Area Riservata</a>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="container">
                <ul>
                    <li><router-link :to="{ name: 'home' }">Home</router-link></li>
                    <li><router-link :to="{ name: 'ChiSiamo' }">Chi Siamo</router-link></li>
                    <li><router-link :to="{ name: 'Contatti' }">Contatti</router-link></li>
                    <li><router-link :to="{ name: 'Categorie' }">Categorie</router-link></li>
                </ul>
            </div>
        </div>
        <hr>
    </div>
  </header>
</template>

<script>
export default {
    name: 'BaseHeader',
}
</script>

<style lang="scss" scoped>
    header{
        padding: .625rem 0;
    }

    .nav_link{
        text-align: right;
    }

    ul{
        display: flex;
        justify-content: center;
        list-style: none;
        column-gap: 10px;

        li{
            padding: .625rem 1.25rem;
            background-color: aquamarine;
        }

        a{
            text-decoration: none;
            color: black;

        }
    }
</style>