<script setup>
import HeaderVue from './components/page/Header.vue';
import FooterVue from './components/page/Footer.vue';
</script>

<script>
export default {
  name: "App",
};
</script>


<template>
<header> <HeaderVue /> </header>
  <main> 
    <router-view />
  </main>
  <footer> <FooterVue /> </footer>
</template>

<style>

</style>
