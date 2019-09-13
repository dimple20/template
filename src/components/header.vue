<template>
  <div class="header">
    <div class="firstSection">
      <div class="container">
        <div class="d-flex bg-black ">
          <div class="particon bg-info p-1">
  
            <div class="d-flex ">
              <div class="mr-1">
                <font-awesome-icon :icon="['fab','apple']" class="fa-1x icon " />
              </div>
              <div class="mb-1 text-white font-weight-bold">VIP SWEEPSTAKES</div>
            </div>
          </div>
  
          <div class="p-1 text-warning"><small>$5000 SHOPPING SHREE</small></div>
          <div class="p-1 font-weight-light text-muted">join movie VIP for chance to win don't forget join during checkout</div>
          <div class="ml-auto font-weight-light text-white p-1">
            <!-- <div class="circle-icon mr-2">
                                    <font-awesome-icon :icon="['fas','facebook-f']" class="fa-1x icon" />
                                </div>
            <li><a href="#"><span class="text-muted "></span> Login</a></li> -->
            <div class="d-flex ">
              <div class="mr-1 text-muted">
                <font-awesome-icon :icon="['fas','sign-in-alt']" class="fa-1x" />
              </div>
              <div class="mb-1 text-white text-muted">Login</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="secondSection">
      <div class="container">
        <b-navbar toggleable="lg" type="white" variant="white">
          <b-navbar-brand href="#">NavBar</b-navbar-brand>
          <b-nav-form>
            <b-form-input size="sm" class="form-control border-secondary  rounded-pill mr-2" placeholder="Search"></b-form-input>
            <button class="button btn-warning text-white border-0">GO</button>
          </b-nav-form>
          <b-navbar-nav class="ml-auto">
            <li class="nav-item">
              <!-- <a class="nav-link active" href="#">Home</a> -->
              <button type="button" class="btn btn-link text-dark">Home</button>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="#">Movie layout</a> -->
              <button type="button" class="btn btn-link text-dark">Movie layout</button>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="#">check single</a> -->
              <button type="button" class="btn btn-link text-dark">check single</button>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link " href="#"></a> -->
              <button type="button" class="btn btn-link text-dark">show time</button>
            </li>
            <li class="nav-item">
              <button type="button" href="" class="btn btn-link text-dark">Top Rate</button>
            </li>
          </b-navbar-nav>
        </b-navbar>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  /* .header{
              padding: -0.5px;
            } */
  
  .firstSection {
    background-color: black;
    /* padding:-0.5px; */
    /* line-height: 1.5; */
  }
  
  .button {
    border-radius: 50%;
  }
  
  .icon {
    color: floralwhite;
  }
</style>
