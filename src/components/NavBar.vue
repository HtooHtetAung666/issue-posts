<template>
  <nav class="navigation">
    <router-link to="/">Issues</router-link>
    <router-link :to="{name:'addissue'}">Add Issue</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
.navigation {
    text-align: center;
    margin: 40px auto;
}
.navigation a{
    display: inline-block;
    text-decoration: none;
    margin: 0 10px;
    color: #999;
    font-size: 18px;
}
a.router-link-active {
    border-bottom: 3px solid gold;
    padding-bottom: 4px;
}
</style>