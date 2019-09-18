<template>
  <md-card>
    <md-card-actions>
      <div class="md-subhead">
        <span>3D Coverflow Effect</span>
        <span>（</span>
        <span>3D滚动切换</span>
        <span>）</span>
      </div>
      <md-button class="md-icon-button"
                 target="_blank"
                 href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/24-effect-coverflow.vue">
        <md-icon>code</md-icon>
      </md-button>
    </md-card-actions>
    <md-card-media class="swiper-inner">
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide slide v-for="(slide, i) in slides" :index="i" :key="i">
          <b-card overlay :img-src="slide.src" img-alt="Card Image " class="align-text-bottom" text-variant="white" title="" :sub-title="slide.subTitle"></b-card></swiper-slide>
        <!-- <swiper-slide><img src="../assets/images/silder1.jpeg"></swiper-slide>
        <swiper-slide><img src="../assets/images/silder1.jpeg"></swiper-slide>
        <swiper-slide><img src="../assets/images/silder1.jpeg"></swiper-slide>
        <swiper-slide><img src="../assets/images/silder1.jpeg"></swiper-slide>
        <swiper-slide><img src="../assets/images/silder1.jpeg"></swiper-slide>
        <swiper-slide><img src="../assets/images/silder1.jpeg"></swiper-slide> -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </md-card-media>
  </md-card>
</template>

<script>
import silderone from "../assets/images/silder1.jpeg";
  import sildetwo from "../assets/images/silder2.jpeg";
  import silderthree from "../assets/images/silder3.jpeg";
  import sildefour from "../assets/images/silder4.jpeg";
  import silderfive from "../assets/images/silder5.jpeg";
  import sildersix from "../assets/images/silder6.jpeg";
  import silderseven from "../assets/images/silder7.jpeg";
  import sildereight from "../assets/images/silder8.jpeg";
  export default {
    data() {
      return {

        swiperOption: {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
          },
          pagination: {
            el: '.swiper-pagination'
          }
        },
        slides: [{
            src: silderone,
           
          },
          {
            src: sildetwo,
           
          },
          {
            src: silderthree,
            
          },
          {
            src: sildefour,
           
          },
          {
            src: silderfive,
          
          },
          {
            src: sildersix,
           
          },
          {
            src: silderseven,
            
          },
          {
            src: sildereight
          }
        ]
      
      };
    }
    
  }
</script>

<style scoped>
  .swiper-inner {
    width: 100%;
    height: 400px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
  }
</style>
