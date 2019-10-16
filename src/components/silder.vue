
<template>
  <div class="silderhead ">
    <div class="container">
      <div id="silder">
      <div class="first-point">
        <div class="row">
          <div class="col-md-9">
            <div class="row">
              <div class="col-md-3 border-right">
                <div>
                  <font-awesome-icon :icon="['fas','film']" class="fa-1x " />
                </div>
                <div class="mb-1">CINEMA</div>
              </div>
              <div class="col-md-3 border-right">
                <div>
                  <font-awesome-icon :icon="['fas', 'gift']" class="fa-1x " />
                </div>
                <div class=" mb-1">PROMATION</div>
              </div>
              <div class="col-md-3 border-right">
                <div>
                  <font-awesome-icon :icon="['fas', 'credit-card']" class="fa-1x " />
                </div>
                <div class=" mb-1">VOUCHERS & CARDS</div>
              </div>
  
              <div class="col-md-3 border-right">
                <div>
                  <font-awesome-icon :icon="['fas', 'ticket-alt']" class="fa-1x " />
                </div>
                <div class=" mb-1">BUY TICKETS</div>
              </div>
            </div>
          </div>
        </div>
        <div class="moviak-point">
          <div>
            <div class="relative">
              <div class="center-moviak">
                <div class="imgpoint">
                  <img src="../assets/images/imgpoint.jpeg">
                  <!-- <font-awesome-icon :icon="['fas', 'popcorn']" class="fa-1x " /> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div class="silder-3D">
      <div class="font-weight-bold pt-5 imagesilde orange">
        Top Movies in Theatres
      </div>
      <carousel-3d>
        <slide v-for="(slide, i) in slides" :index="i" :key="i">
          <b-card overlay :img-src="slide.src" img-alt="Card Image " text-variant="white">
            <div>
              <div class="font-weight-bold text-center">{{slide.title}}</div>
              <div class="text-center font-size">{{slide.subtitle}}</div>
              <div class="d-flex justify-content-center">
                <div class="mr-1 ">
                  <font-awesome-icon :icon="slide.icon" class="fa-1x " />
                </div>
                <div class="mb-1 font-size">{{slide.name}}</div>
                <div class="ml-4 mr-1">
                  <font-awesome-icon :icon="slide.subicon" class="fa-1x " />
                </div>
                <div class="mb-1 font-size">{{slide.subname}}</div>
              </div>
            </div>
          </b-card>
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
  import silderone from "../assets/images/silder1.jpeg";
  import sildetwo from "../assets/images/silder2.jpeg";
  import silderthree from "../assets/images/silder3.jpeg";
  import sildefour from "../assets/images/silder4.jpeg";
  import silderfive from "../assets/images/silder5.jpeg";
  import sildersix from "../assets/images/silder6.jpeg";
  import silderseven from "../assets/images/silder7.jpeg";
  import sildereight from "../assets/images/silder8.jpeg";
  
  export default {
    components: {
      Carousel3d,
      Slide
    },
    data() {
      return {
        slides: [{
            src: silderone,
            title: "Star Trek Beyond",
            subtitle: "Release:August 3,2017",
            icon: ["fas", "play-circle"],
            name: "Trailer",
            subicon: ["fas", "info-circle"],
            subname: "Details"
          },
          {
            src: sildetwo,
            title: "The Girls with All",
            subtitle: "Release: May 18,2017",
            icon: ["fas", "play-circle"],
            name: "Trailer",
            subicon: ["fas", "info-circle"],
            subname: "Details"
          },
          {
            src: silderthree,
            title: "Sausage Party",
            subtitle: "Release: MAy 6,2017",
            icon: ["fas", "play-circle"],
            name: "Trailer",
            subicon: ["fas", "info-circle"],
            subname: "Details"
          },
          {
            src: sildefour,
            title: "The Girls with All",
            subtitle: "Release: May 18,2017",
            icon: ["fas", "play-circle"],
            name: "Trailer",
            subicon: ["fas", "info-circle"],
            subname: "Details"
          },
          {
            src: silderfive,
            title: "Sausage Party",
            subtitle: "Release: MAy 6,2017",
            icon: ["fas", "play-circle"],
            name: "Trailer",
            subicon: ["fas", "info-circle"],
            subname: "Details"
          },
          {
            src: sildersix,
            title: "The Girls with All",
            subtitle: "Release: May 18,2017",
            icon: ["fas", "play-circle"],
            name: "Trailer",
            subicon: ["fas", "info-circle"],
            subname: "Details"
          },
          {
            src: silderseven,
            title: "Sausage Party",
            subtitle: "Release: MAy 6,2017",
            icon: ["fas", "play-circle"],
            name: "Trailer",
            subicon: ["fas", "info-circle"],
            subname: "Details"
          },
          {
            src: sildereight,
            title: "Sausage Party",
            subtitle: "Release: MAy 6,2017",
            icon: ["fas", "play-circle"],
            name: "Trailer",
            subicon: ["fas", "info-circle"],
            subname: "Details"
          }
        ]
      };
    }
  };
</script>

<style lang="scss">
  @import "src/assets/scss/variable.scss";
  @import "src/assets/scss/main.scss";
  .silderhead {
    background-color: $head-color;
    .relative {
      position: relative;
    }
    .center-moviak {
      position: absolute;
      right: 100px;
      top: 50%;
      width: 12%;
      height: 100px;
      background-color: $point-color;
      text-align: center;
      font-size: 18px;
      border-radius: 50%;
      padding: 15px;
      border-color: $white;
      margin-top: -65px;
    }
    .silder-3D {
      background-image: url("../assets/images/footer (1).png");
      width: 100%;
      height: 70vh;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .imgpoint img {
      height: 80px;
      border-radius: 60%;
      width: 100px;
    }
    .imagesilde {
      font-size: 30px;
    }
    .card-img-overlay {
      top: 60%;
    }
  }
</style>
