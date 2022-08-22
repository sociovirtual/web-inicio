<script setup>
import HeaderVue from './components/page/Header.vue';
import FooterVue from './components/page/Footer.vue';

import { useMeta } from 'vue-meta';

useMeta({ 
  title: ' tiutlo del sitio ',
  description : "  texto descripscion " ,
        twitter: {
            title: "twitter title",
            description: "twitter description",
            card: "twitter card",
            image: "twitter image",
        },
        og: {
            title : 'og title!',
            description : 'og description!',
            type : 'og type',
            url : 'og url',
            image : 'og image',
            site_name : 'og site name',
        }
  })

</script>

<script>
export default {
  name: "App",
};
</script>


<template>

<metainfo>
      <template v-slot:title="{ content }">{{ content ? ` -=+] ${content} &bull; SITIOWEB [+=- ` : `SITE_NAME` }}</template>
</metainfo>


<header> <HeaderVue /> </header>
  <main> 
    <router-view />
  </main>
  <footer> <FooterVue /> </footer>
</template>

<style>

</style>
