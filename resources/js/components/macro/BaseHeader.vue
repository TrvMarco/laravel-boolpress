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
    </div>
  </header>
</template>

<script>
export default {
    name: 'BaseHeader',
}
</script>

<style lang="scss">
    header{
        padding: .625rem 0;
    }

    .nav_link{
        text-align: right;
    }
</style>