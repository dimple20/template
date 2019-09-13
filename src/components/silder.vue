
<template>
  <div class="silderhead ">
    <div class="container">
      <div class="first-point">
        <div class="d-flex  mr-5">
          <div class="px-5 border border-secondary">
            <div>
              <font-awesome-icon :icon="['fas','film']" class="fa-1x " />
            </div>
            <div class="mb-1">CINEMA</div>
          </div>
          <div class="px-5 border border-secondary">
            <div>
              <font-awesome-icon :icon="['fas', 'gift']" class="fa-1x " />
            </div>
            <div class=" mb-1">PROMATION</div>
          </div>
          <div class="px-5 border border-secondary">
            <div>
              <font-awesome-icon :icon="['fas', 'credit-card']" class="fa-1x " />
            </div>
            <div class=" mb-1">VOUCHERS & CARDS</div>
          </div>
          <div class="px-5 border border-secondary">
            <div>
              <font-awesome-icon :icon="['fas', 'ticket-alt']" class="fa-1x " />
            </div>
            <div class=" mb-1">BUY TICKETS</div>
          </div>
  
  
  
        </div>
        <div class="moviak-point">
          <div>
            <div class="relative">
              <div class="center-moviak">
                <div>
                  <!-- <font-awesome-icon :icon="['fas', 'popcorn']" class="fa-1x " /> -->
                </div>
              </div>
            </div>
          </div>
  
        </div>
      </div>
  
  
  
  
    </div>
    <div class="silder-3D ">
      <div class="text-warning font-weight-bold pt-5 imagesilde">
        Top Movies in Theatres
      </div>
      <carousel-3d>
        <slide v-for="(slide, i) in slides" :index="i" :key="i">
          <b-card overlay :img-src="slide.src" img-alt="Card Image " class="align-text-bottom" text-variant="white" title="" :sub-title="slide.subTitle"></b-card>
            <!-- <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
                  <img :data-index="index" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" :src="slide.src" :message="slide.message">
</template>-->
    </slide>
</carousel-3d>
</div>
  </div>
</template>

<script>
  import {
    Carousel3d,
    Slide
  } from "vue-carousel-3d";
  import silderone from "../assets/silder1.jpeg";
  import sildetwo from "../assets/silder2.jpeg";
  import silderthree from "../assets/silder3.jpeg";
  import sildefour from "../assets/silder4.jpeg";
  import silderfive from "../assets/silder5.jpeg";
  import sildersix from "../assets/silder6.jpeg";
  import silderseven from "../assets/silder7.jpeg";
  import sildereight from "../assets/silder8.jpeg";
  
  export default {
    components: {
      Carousel3d,
      Slide
    },
    data() {
      return {
        slides: [{
            src: silderone,
            subTitle: "",
          },
          {
            src: sildetwo,
            subTitle: "",
          },
          {
            src: silderthree,
            subTitle: "",
          },
          {
            src: sildefour,
            subTitle: "",
          },
          {
            src: silderfive,
            subTitle: "",
          },
          {
            src: sildersix,
            subTitle: "",
          },
          {
            src: silderseven,
            subTitle: "",
          },
          {
            src: sildereight
          }
        ]
      };
    }
  };
</script>

<style>
  .silderhead {
    background-color: dimgray;
  }
  
  
  /* .first-point {
        
      } */
  
  .relative {
    position: relative;
  }
  
  .center-moviak {
    position: absolute;
    left: 0;
    top: 50%;
    width: 12%;
    height: 100px;
    background-color: orange;
    text-align: center;
    font-size: 18px;
    border-radius: 50%;
    padding: 15px;
    border-color: mintcream;
  }
  
  .silder-3D {
    background-image: url("../assets/footer (1).png");
    width: 100%;
    height: 70vh;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  .imagesilde {
    font-size: 30px;
  }
  
  .moviak-point {
    margin-top: -200;
  }
  
  
  /*   */
</style>
