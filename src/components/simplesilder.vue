<template>
  <md-card>
    <md-card-actions>
      <div class="md-subhead">
        <span>Loop Mode / Infinite Loop</span>
        <span>（</span>
        <span>无限循环模式</span>
        <span>）</span>
      </div>
      <md-button class="md-icon-button"
                 target="_blank"
                 href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/20-infinite-loop.vue">
        <md-icon>code</md-icon>
      </md-button>
    </md-card-actions>
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide slide v-for="(slide, i) in slides" :index="i" :key="i">
            <b-card overlay :img-src="slide.src" img-alt="Card Image "></b-card>
        </swiper-slide>
        
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </md-card-media>
  </md-card>
</template>

<script>
import silderone from "../assets/images/footer (1).png";
  import sildetwo from "../assets/images/footer (1).png";
  import silderthree from "../assets/images/footer (1).png";
  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
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
            
          }]
      }
      }
  }
</script>
