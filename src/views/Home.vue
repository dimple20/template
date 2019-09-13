<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <header-section/>
    <photo/>
    <cardimage/>
    <silder/>
  
    <videoimage/>
    <latestnew/>
    <footerSection/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import headerSection from "@/components/header.vue";
  import photo from "@/components/photo.vue";
  import cardimage from "@/components/cardimage.vue";
  import videoimage from "@/components/videoimage.vue";
  import latestnew from "@/components/latestnew.vue";
  import silder from "@/components/silder.vue";
  import footerSection from "@/components/footerSection.vue";
  
  export default {
    name: "home",
    components: {
      headerSection,
      photo,
      cardimage,
      silder,
      videoimage,
      latestnew,
      footerSection
    }
  };
</script>
