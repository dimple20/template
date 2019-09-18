<template>
  <div class="header">
    <div class="firstSection">
      <div class="container">
        <div class="d-flex justify-content-between">
          <div class="d-flex">
            <div class="p-1  text-white font-weight-bold particon"><span class="mr-1">
                          <font-awesome-icon :icon="['fab','apple']" class="fa-1x icon " />
                           </span>VIP SWEEPSTAKES</div>
            <div class="p-2 orange fontsize">$5000 SHOPPING SHREE
              <span class="p-2 font-weight-light text-muted fontsize ">join movie VIP for chance to win don't forget join during checkout</span></div>
          </div>
          <div class="p-1  text-white text-muted"><span class="mr-1"><font-awesome-icon :icon="['fas','user']" class="fa-1x" /></span>Login</div>
        </div>
  
      </div>
    </div>
    <div class="secondSection">
      <div class="container">
        <div>
          <b-navbar toggleable="lg">
            <b-navbar-brand><img src="../assets/images/FotoJet.jpg"></b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="mr-auto">
                <b-nav-form>
                  <b-form-input size="sm" class="mr-sm-2 border-secondary  rounded-pill mr-2" placeholder="Search"></b-form-input>
                  <button class="button text-white border-0">GO</button>
                </b-nav-form>
              </b-navbar-nav>
              <div class="ml-auto">
                <b-navbar-nav>
                  <li class="nav-item" v-for="route in routes" v-bind:key="route.index">
                    <router-link :to="route" class="btn btn-link text-dark nav-color" href="#" active-class="active">
                      {{ route.title }}
                    </router-link>
                  </li>
                </b-navbar-nav>
              </div>
            </b-collapse>
          </b-navbar>
        </div>
      </div>
      <!-- <b-navbar toggleable="lg" type="white" variant="white">
              <b-navbar-brand>
                <img src="../assets/images/FotoJet.jpg" class="headerimg"></b-navbar-brand>
              <b-nav-form>
                <b-form-input size="sm" class="form-control border-secondary  rounded-pill mr-2" placeholder="Search"></b-form-input>
                <button class="button text-white border-0">GO</button>
              </b-nav-form>
              <b-navbar-nav class="ml-auto">
                <li class="nav-item" v-for="route in routes" v-bind:key="route.index">
                  <router-link :to="route" class="btn btn-link text-dark nav-color" href="#" active-class="active">
                    {{ route.title }}
                  </router-link>
                </li>
              </b-navbar-nav>
            </b-navbar> -->
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        routes: [{
            title: "HOME"
          },
          {
            title: "MOVIE LAYOUT"
          },
          {
            title: "PAGE SINGLE"
          },
          {
            title: "SHOW TIMES"
          },
          {
            title: "TOP RATES"
          }
        ]
      };
    }
  };
</script>

<style lang="scss">
  @import "src/assets/scss/variable.scss";
  @import "src/assets/scss/main.scss";
  .header {
    .firstSection {
      background-color: $black;
      /* padding:/home/wohlig/Documents/dimple/newform/src/assets/images/FotoJet.jpg-0.5px; */
      /* line-height: 1.5; */
    }
    .icon {
      color: $white;
    }
    .particon {
      background-color: $header-bg-color;
    }
    .headerimg {
      height: 30px;
    }
    .fontsize {
      font-size: 12px;
    }
    .nav-item {
      .btn-link:hover {
        color: $search-btn-color;
      }
      //  .btn-link:active{
      //    color: red !important;
      //  }
    }
    .secondSection {
      img {
        height: 40px;
      }
      .button {
        border-radius: 50%;
        background-color: $search-btn-color;
      }
    }
  }
</style>
