<template>
   <div class="main-slider">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
     style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    
    >
      <!-- Text slides with image -->
      <b-carousel-slide>
      <template v-slot:img>
          <img
            class="d-block  w-100"
            width="1024"
            height="350"
            src="../assets/image1.jpeg"
            alt="image slot"
          >
        </template></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide >
      <template v-slot:img>
          <img
            class="d-block w-100"
            width="1024"
            height="350"
            src="../assets/image2.jpeg"
            alt="image slot"
          >
        </template>
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide>
      
        <template v-slot:img>
          <img
            class="d-block h-500 w-100"
            width="1024"
            height="350"
            src="../assets/image1.jpeg"
            alt="image slot"
          >
        </template>
        </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block height-500 w-100"
            width="1000"
            height="350"
            src="../assets/images3.jpeg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

    
      
    </b-carousel>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>
<style>
/* .height-500 {
  height: 500px !important;
} */
</style>

