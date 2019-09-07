<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <header-section/>
    <photo/>
    <cardimage/>

  </div>
</template>

<script>
// @ is an alias to /src
import headerSection from "@/components/header.vue";
import photo from "@/components/photo.vue";
import cardimage from "@/components/cardimage.vue";


export default {
  name: "home",
  components: {
    headerSection,
    photo,
    cardimage
  }
};
</script>
