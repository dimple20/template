<template>
  <div class="container">
    <div class="cradtemp">
      <ul class="breadcrumb bg-white mt-2">
        <li class="breadcrumb-item font-weight-bolder"><a href="" class=" text-warning">Now playing</a></li>
        <li class="breadcrumb-item font-weight-bolder">Opening this week</li>
        <li class="breadcrumb-item font-weight-bolder">Comming soon</li>
      </ul>
    </div>
    <div class="mb-5">
    <div class="row ">
  
      <!-- using v-for -->
      <div class="col-md-3 col-xs-12  p-2 relative" v-for="item in items" v-bind:key="item.index">
        <!-- binding image here -->
        <!-- <div>
                <img :src="item.img" img-alt="Image"  img-top tag="article" />
          </div> -->
        <!-- binding title -->
        <!-- <div class="card-title font-weight-bold text-left mb-3 mt-3">
               {{item.title}}
          </div>
          <div class="card-subtitle text-muted text-left font-size">
             {{item.subtitle}}
          </div> -->
        <!-- binding icon here -->
        <!-- <div class="mt-1 d-flex">
          <div class="card-icon d-flex mr-4">
            <div class="mr-1">
            <font-awesome-icon :icon="item.icon"/>
            </div>
            <div class="card-name text-muted font-size">
             {{item.name}}
          </div>
                  </div>
         <div class="d-flex mr-2">
           <div class="mr-1">
             <font-awesome-icon :icon="item.subicon"/>
           </div>
            <div class="card-name text-muted font-size">
             {{item.subname}}
          </div> -->
           <div>
          <div class="relative">
            <img :src="item.img" class="card-img" alt="..." height="300px">
            <div class="absolute text-center">G</div>
          </div>
          <div class="card-point">4.4</div>
          <div class="font-weight-bold text-left mb-2">{{item.title}}</div>
            <div class="text-muted text-left font-size">{{item.subtitle}}</div>
            <div class="d-flex">
              <div class="mr-1">
                <font-awesome-icon :icon="item.icon" class="fa-1x " />
              </div>
              <div class="mb-1 text-muted font-size">{{item.name}}</div>
              <div class="ml-4 mr-1">
                <font-awesome-icon :icon="item.subicon" class="fa-1x " />
              </div>
              <div class="mb-1 text-muted font-size">{{item.subname}}</div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  
    </div>
  
  
  
</template>

<script>
  import image1 from "../assets/images/download 1.jpeg";
  
  import image2 from "../assets/images/download 3.jpeg";

  import image3 from "../assets/images/download2.jpeg";

  import image4 from "../assets/images/download 1.jpeg";

  import image5 from "../assets/images/download2.jpeg";

  
  export default {
    data() {
      return {
        items: [{
            img: image1,
            title:"Star Trek Beyond",
            subtitle: "Release:August 3,2017",
            icon: ["fas", "play-circle"],
            name: "Trailer",
            subicon: ["fas", "info-circle"],
            subname: "Details"
          },
          {
            img: image2,
            title: "Bad Moms",
            subtitle: "Release: july 15,2017",
            icon: ["fas", "play-circle"],
            name: "Trailer",
            subicon: ["fas", "info-circle"],
            subname: "Details"
          },
          {
            img: image3,
            title: "The Girls with All",
            subtitle: "Release: May 18,2017",
            icon: ["fas", "play-circle"],
            name: "Trailer",
            subicon: ["fas", "info-circle"],
            subname: "Details"
          },
          {
            img: image4,
            title: "Sausage Party",
            subtitle:"Release: MAy 6,2017",
            icon: ["fas", "play-circle"],
            name: "Trailer",
            subicon: ["fas", "info-circle"],
            subname: "Details"
          },
          // {
          //   img: image5,
          //   title: "Don't Breathe",
          //   subtitle:"Release: july 20,2017",
          //   icon: ["fas", "play-circle"],
          //   name: "Trailer",
          //   subicon: ["fas", "info-circle"],
          //   subname: "Details"
          // }
  
          
        ]
      };
    }
  };
</script>

<style lang="scss">

@import "src/assets/scss/variable.scss";

  .cradtemp {
    font-size: 25px;
  }
  
  .font-size {
    font-size: 1px;
  }
  
  .relative {
    position: relative;
  }
  
  .absolute {
    position: absolute;
    top: 25px;
    right: 0px;
    width: 25px;
    height: 25px;
    /* border: 3px solid orange; */
    background-color:$search-btn-color;
    color:$white;
  }
  
  .card-point {
    position: absolute;
    top: 40%;
    left: 50%;
    width: 25%;
    height: 12%;
    border-radius: 50%;
    padding: 10px;
    color:$black;
    background-color: $white;
    transform: translate(-50%, -50%);
    opacity: 0.5;
  }
</style>
