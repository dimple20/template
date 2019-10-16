<template>
  <div class="Home">
    <HeaderContent/>
    <photo/>
    <cardimage/>
    <silder/>
  <demopart/>
    <latestnew/>
    <!-- <vueswp/> -->
    <!-- <simplesilder/> -->
    <imageDemo/>
        <!-- <lightsildes/> -->
<searchdemo/>
  <navcontent/>
    <footerSection/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderContent from "@/components/HeaderContent.vue";
import photo from "@/components/photo.vue";
import cardimage from "@/components/cardimage.vue";
import demopart from "@/components/demopart.vue";
import latestnew from "@/components/latestnew.vue";
import silder from "@/components/silder.vue";
import navcontent from "@/components/navcontent.vue";
import imageDemo from "@/components/imageDemo.vue";
import searchdemo from "@/components/searchdemo.vue";

// import lightsildes from "@/components/lightsildes.vue";
// import vueswp from "@/components/vueswp.vue";
// import simplesilder from "@/components/simplesilder.vue";

import footerSection from "@/components/footerSection.vue";

export default {
  name: "Home",
  components: {
    HeaderContent,
    photo,
    cardimage,
    silder,
    demopart,
    latestnew,
    navcontent,
    imageDemo,
    searchdemo,
    // lightsildes,
    // vueswp,
    // simplesilder,
    footerSection
  }
};
</script>
