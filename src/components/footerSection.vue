<template>
    <div class="footerpart">
        <div class="footertop">
            <div class="container">
                <div class="row ">
                    <div class="col-md-3 mt-5 text-left">
                        <div class="logo text-white mb-2">LOGO</div>
                        <div class="message text-white mb-3">
                            Lorem ipsum dolar sit amet consectetor adipiscing elit,sed do eiusmod tempore.incididunt ut labore et dolare mango aliqw.Ut enim ad minim veniam,quis nostrud exercitiation uliamco laboris nisi ut aliquip ex ea commomdo consequat
                        </div>
                        <div class="d-flex">
                            <div>
                                <div class="circle-icon mr-2">
                                    <font-awesome-icon :icon="['fab', 'facebook-f']" class="fa-1x " />
                                </div>
                            </div>
                            <div>
                                <div class="circle-icon mr-2">
                                    <font-awesome-icon :icon="['fab', 'twitter']" class="fa-1x " />
                                </div>
                            </div>
                            <div>
                                <div class="circle-icon mr-2">
                                    <font-awesome-icon :icon="['fab', 'google-plus-g']" class="fa-1x " />
                                </div>
                            </div>
                            <div>
                                <div class="circle-icon mr-2">
                                    <font-awesome-icon :icon="['fab', 'facebook-f']" class="fa-1x " />
                                </div>
                            </div>
                        </div>
    
    
    
    
    
                    </div>
                    <div class="col-md-3 mt-5 ">
                        <div class="font-weight-bolder mb-2 text-left text-white">Custom Services</div>
                        <div class="font-size text-white text-left">
                            <div class=" mb-1">Help & Contact</div>
                            <div class="mb-1 ">Return Policy</div>
                            <div class=" mb-1">Feedback</div>
                            <div class=" mb-1 ">Careers</div>
                        </div>
                    </div>
                    <div class="col-md-3 mt-5 text-left">
                        <div class="font-weight-bolder mb-2 text-white">Recent Post</div>
    
                        <div class="font-size text-white mb-1">Doctore stranger assemble with the avengers</div>
                        <div class="font-size text-grey mb-3">December 20,2018</div>
                        <div class="font-size text-white mb-1">5 movies to watch this week(29 sep 2016)</div>
                        <div class="font-size text-grey mb-1">December 20,2018</div>
    
                    </div>
                    <div class="col-md-3 mt-5 text-left ">
                        <div class="font-weight-bolder mb-2 text-white">Contact Us</div>
                        <div class="font-size text-white text-left">
                            <div class="d-flex">
                                <div class="mr-1">
                                    <font-awesome-icon :icon="['fas', 'location-arrow']" class="fa-1x " />
                                </div>
                                <div class=" mb-1">9067 zurich switzerland</div>
                            </div>
                            <div class="d-flex ">
                                <div class="mr-1">
                                    <font-awesome-icon :icon="['far', 'envelope']" class="fa-1x " />
                                </div>
                                <div class=" mb-1">abc@gmail.com</div>
                            </div>
                            <div class="d-flex">
                                <div class="mr-1">
                                    <font-awesome-icon :icon="['fas','phone-alt']" class="fa-1x " />
                                </div>
                                <div class="mb-1 text-warning">01-234-5678</div>
                            </div>
    
                            <b-input-group class="">
                                <template v-slot:append>
                                     <b-input-group-text> <div class="mr-1" >
                                            <font-awesome-icon :icon="['far','envelope']" class="fa-1x icon" />
                                        </div></b-input-group-text>
                                </template>
                     <b-form-input></b-form-input>
                  </b-input-group>

                        </div>
                    </div>
                </div>
    
            </div>
        </div>
        <div class="footerbottom">
            <div class="container">
    
                <div class="row ">
                    <div class="col-md-6 text-left mt-3">
                        <div class="logo text-muted mb-2">Copyright 2018 movies</div>
    
                    </div>
                    <div class="col-md-6 text-right mt-3">
                        <div class=" mb-2 text-muted">privacy policy tems of us site Map</div>
                    </div>
    
                </div>
    
            </div>
        </div>
    </div>
</template>

<script>
    export default {};
</script>

<style>
    .footertop {
        background-image: url("../assets/footer (1).png");
        width: 100%;
        height: 50vh;
        background-repeat: no-repeat;
        background-size: cover;
    }
    
    .mb-2 {
        font-size: 18px;
    }
    
    .font-size {
        font-size: 14px;
    }
    
    .footerbottom {
        background-color: black;
    }
    
    .message {
        font-size: 14px;
    }
    
    .circle-icon {
        /* border: 1px ; */
        border-radius: 50%;
        padding: 5px 11px;
        /* margin-right: 20px; */
        background-color: #80808030;
        color: floralwhite;
    }
    
    .text-box {
        color: grey;
    }
</style>
