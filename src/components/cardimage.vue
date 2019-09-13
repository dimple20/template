<template>
  <div class="container">
    <div class="cradtemp">
      <ul class="breadcrumb bg-white mt-2">
        <li class="breadcrumb-item font-weight-bolder"><a href="" class=" text-warning">Now playing</a></li>
        <li class="breadcrumb-item font-weight-bolder">Opening this week</li>
        <li class="breadcrumb-item font-weight-bolder">Comming soon</li>
      </ul>
    </div>
    <div class="row ">
      <div class="col-xs-2  p-2 relative">
        <div class="card" style="width: 13rem;">
          <div class="relative">
            <img src="../assets/download 1.jpeg" class="card-img" alt="..." height="300px">
          </div>
          <div class="card-point">4.5</div>
          <div class="card-body">
            <div class="font-weight-bold text-left mb-3">Star Trek Beyod</div>
            <div class="text-muted text-left font-size">Release:August 3,2017</div>
            <div class="d-flex">
              <div class="mr-1">
                <font-awesome-icon :icon="['fas','play-circle']" class="fa-1x " />
              </div>
              <div class="mb-1 text-muted font-size">Trailer</div>
              <div class="ml-4">
                <font-awesome-icon :icon="['fas','info-circle']" class="fa-1x " />
              </div>
              <div class="mb-1 text-muted font-size">Details</div>
  
            </div>
          </div>
        </div>
        <div class="absolute">G</div>
        
      </div>
      <div class="col-xs-2  p-2 relative">
        <div class="card" style="width: 13rem;">
          <div class="relative">
            <img src="../assets/download2.jpeg" class="card-img" alt="..." height="300px">
          </div>
          <div class="card-point">4.5</div>
          <div class="card-body">
            <div class="font-weight-bold text-left mb-3">Bad Moms</div>
            <div class="text-muted text-left font-size">Release:july 15,2017</div>
            <div class="d-flex">
              <div class="mr-1">
                <font-awesome-icon :icon="['fas','play-circle']" class="fa-1x " />
              </div>
              <div class="mb-1 text-muted font-size">Trailer</div>
              <div class="ml-4">
                <font-awesome-icon :icon="['fas','info-circle']" class="fa-1x " />
              </div>
              <div class="mb-1 text-muted font-size">Details</div>
            </div>
          </div>
        </div>
        <div class="absolute">G</div>
      </div>
      <div class="col-xs-2  p-2 relative">
        <div class="card" style="width: 13rem;">
          <div class="relative">
            <img src="../assets/download 3.jpeg" class="card-img" alt="..." height="300px">
          </div>
          <div class="card-point">4.2</div>
  
          <div class="card-body">
            <div class="font-weight-bold text-left mb-3 textsize">The girl</div>
            <div class="text-muted text-left font-size">Release:May 18,2017</div>
            <div class="d-flex">
              <div class="mr-1">
                <font-awesome-icon :icon="['fas','play-circle']" class="fa-1x " />
              </div>
              <div class="mb-1 text-muted font-size">Trailer</div>
              <div class="ml-4">
                <font-awesome-icon :icon="['fas','info-circle']" class="fa-1x "/>
              </div>
              <div class="mb-1 text-muted font-size">Details</div>
            </div>
          </div>
        </div>
        <div class="absolute">G</div>
      </div>
      <div class="col-xs-2  p-2 relative">
        <div class="card" style="width: 13rem;">
          <div class="relative">
            <img src="../assets/download 1.jpeg" class="card-img" alt="..." height="300px">
          </div>
          <div class="card-point">4.4</div>
          <div class="card-body">
            <div class="font-weight-bold text-left mb-3">Sausange Party</div>
            <div class="text-muted text-left font-size">Release:May 6,2017</div>
            <div class="d-flex">
              <div class="mr-1">
                <font-awesome-icon :icon="['fas','play-circle']" class="fa-1x " />
              </div>
              <div class="mb-1 text-muted font-size">Trailer</div>
              <div class="ml-4">
                <font-awesome-icon :icon="['fas','info-circle']" class="fa-1x " />
              </div>
              <div class="mb-1 text-muted font-size">Details</div>
            </div>
          </div>
        </div>
        <div class="absolute">G</div>
      </div>
      <div class="col-xs-2  p-2 relative">
        <div class="card" style="width: 13rem;">
          <div class="relative">
            <img src="../assets/download 3.jpeg" class="card-img" alt="..." height="300px">
          </div>
          <div class="card-point ">4.5</div>
          <div class="card-body">
            <div class="font-weight-bold text-left mb-3">Don't Breath</div>
            <div class="text-muted text-left font-size">Release:July 20,2017</div>
            <div class="d-flex">
              <div class="mr-1">
                <font-awesome-icon :icon="['fas','play-circle']" class="fa-1x " />
              </div>
              <div class="mb-1 text-muted font-size">Trailer</div>
              <div class="ml-4">
                <font-awesome-icon :icon="['fas','info-circle']" class="fa-1x " />
              </div>
              <div class="mb-1 text-muted font-size">Details</div>
            </div>
          </div>
        </div>
        <div class="absolute">PG</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style>
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
    right: 9px;
    width: 25px;
    height: 25px;
    border: 3px solid orange;
    background-color: orange;
    color: white;
  }
  
  .card-point {
    position: absolute;
    top: 40%;
    left: 50%;
    width: 25%;
    height: 12%;
    border-radius: 50%;
    padding: 10px;
    color: black;
    background-color: white;
    transform: translate(-50%, -50%);
    opacity: 0.5;
  }
</style>
