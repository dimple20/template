<template>
    <div class="container">
        <div class="silderimage mt-5">
            <div class="row m-auto">
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-3"></div>
                        <div class="col-md-9 ">
                            <div class="text-left  mb-3 orange">
                                <h3>Video and photos</h3>
                            </div>
                            <div class="embed-responsive embed-responsive-4by3">
                                <iframe width="200" class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                            </div>
                            <div class="text-left">
                                <h5> 10 cloverfield lane</h5>
                                <div class="paratext"> A young women wakes up after a terriable accident to find that she's locked in a celler with a coomsday prepper...Who insists that he saved her life and that the world outside is unhiabitable following an apocalyptic catastrophe.
                                    Uncertain what to believe the women soon.. </div>
                            </div>
                        </div>
                    </div>
    
                </div>
    
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-4 px-1 mb-2" v-for="widget in widgets" v-bind:key="widget.index">
                            <div>
                                <img :src="widget.img" img-alt="Image" img-top tag="article" class="imgsize"> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import image1 from "../assets/images/pic1.jpg";
    
    import image2 from "../assets/images/pic2.jpg";
    
    import image3 from "../assets/images/pic3.jpg";
    
    import image4 from "../assets/images/pic4.jpg";
    
    import image5 from "../assets/images/pic5.jpg";
    
    import image6 from "../assets/images/pic6.jpg";
    
    import image7 from "../assets/images/pic7.jpg";
    
    export default {
        data() {
            return {
                widgets: [{
                        img: image1,
                    }, {
                        img: image2,
                    },
                    {
                        img: image3,
                    },
                    {
                        img: image4,
                    },
                    {
                        img: image5,
                    },
                    {
                        img: image6,
                    },
                    {
                        img: image7,
                    },
                    {
                        img: image3,
                    },
                    {
                        img: image2,
                    }
    
                ]
    
            };
        }
    };
</script>

<style lang="scss">
    @import"src/assets/scss/main.scss";
    @import"src/assets/scss/variable.scss";
    .silderimage {
        .imgsize {
            width: 100%;
            height: 140px;
            overflow: hidden;
        }
        .paratext {
            font-size: 9px;
        }
        .img {
            max-width: 100%;
            max-height: 100%;
        }
    }
</style>
