<template>
  <div class="header">
    <div class="firstSection">
      <div class="container">
        <div class="d-flex bg-black ">
          <div class="p-2 bg-info text-white font-weight-bold"><small>VIP SWEEPSTAKES</small></div>
          <div class="p-2 "><small class="text-warning">$5000 SHOPPING SHREE</small></div>
          <div class="p-2 font-weight-light text-grey">join movie VIP for chance to win don't forget join during checkout</div>
          <div class="ml-auto font-weight-light text-white p-2">
            <li><a href="#"><span class="glyphicon glyphicon-log-in "></span> Login</a></li>
          </div>
        </div>
      </div>
    </div>
    <div class="secondSection">
      <div class="container">
        <b-navbar toggleable="lg" type="white" variant="white">
          <b-navbar-brand href="#">NavBar</b-navbar-brand>
          <b-nav-form>
            <b-form-input size="sm" class="form-control border-secondary rounded-pill mr-2" placeholder="Search"></b-form-input>
            <button class="button btn-warning text-white">GO</button>
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
</style>
