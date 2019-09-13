<template>
    <div class="backimage ">
        <div class="imgbg mb-4 relative">
            <figure>
            <img src="../assets/bannerbg2.jpeg" fluid alt="Responsive image">
            
            </figure>
 <div class="imgset text-warning font-weight-bolder">Latest News</div>
     </div>
        <div class="cardimg">
            <div class="container">
                <div class="row m-5 p-5 ">
                    <div class="col-md-3 ">
                        
                        <div>
                            <b-card :img-src="demoImage" img-alt="Image" img-top tag="article" class="mb-2">
                                <b-card-text>
                                   <div class="font-size font-weight-bold">Doctor Stranger Assemble With The Avengers</div>
                                </b-card-text>
                                 <b-button href="#" class="btn-sm border-0 border-secondary rounded-pill" variant="warning">Read More</b-button>
                            </b-card>
                        </div>
                        <div>
                            <b-card :img-src="demoImage1" img-alt="Image" img-top tag="article" class="mb-2">
                                <b-card-text>
                                    <div class="font-size font-weight-bold">5 Movies to watch this week (29 sep 2016)</div>
                                </b-card-text>
    
                                <b-button href="#" class="btn-sm  border-0 border-secondary rounded-pill" variant="warning">Read More</b-button>
                            </b-card>
                        </div>
                    
                    </div>
                    <div class="col-md-6">
                  
                            <b-card  :img-src="demoImage2" img-alt="Image" img-top tag="article" class="mb-2">
                                <b-card-text>
                                    <div class="font-size font-weight-bold">Another Jurassic Park star joins thor:Rangnorok</div>
                                    <div class="font-size">Sed ut perspiciatis unde omnis iste nature errors si volumptatem</div>
                                </b-card-text>
    
                                <b-button href="#" class="btn-sm border-secondary border-0 rounded-pill" variant="warning">Read More</b-button>
                            </b-card>
       
    
                    </div>
                    <div class="col-md-3">
                        <div>
                            <b-card :img-src="demoImage3" img-alt="Image" img-top tag="article" class="mb-2">
                                <b-card-text>
                                    <div class="font-size font-weight-bold">Stan Lee Creates new Superhero characters for Asia</div>
                                </b-card-text>
    
                                <b-button href="#" class="btn-sm border-0 border-secondary rounded-pill" variant="warning">Read More</b-button>
                            </b-card>
                        </div>
                        <div>
                            <b-card :img-src="demoImage4" img-alt="Image" img-top tag="article" class="mb-2">
                                <b-card-text>
                                   <div class="font-size font-weight-bold">Third Stand-alone "Star Wars" Confirmed for 2020 Read</div>
                             </b-card-text>
    
                                <b-button href="#" class="btn-sm border-0 border-secondary rounded-pill" variant="warning">Read More</b-button>
                            </b-card>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    </div>
</template>

<script>
    import image1 from "../assets/pic1.jpg";
    import image2 from "../assets/pic2.jpg";
    import image3 from "../assets/pic5.jpg";
    import image4 from "../assets/pic7.jpg";
    import image5 from "../assets/pic6.jpg";





    export default {
        data() {
            return {
                demoImage: image1,
                demoImage1: image2,
                demoImage2: image3,
                demoImage3 : image4,
                demoImage4 : image5


            };
        }
    };
</script>

<style>
    .imgbg img {
        width: 100%;
        height: 300px;
    }
    .cardimg{
margin-top: -200px;
    }
    .rounded-pill{
        border:none;
    }
    .font-size {
        font-size: 14px;
    }
    .relative {
  position: relative;
}

.imgset {
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  text-align: center;
  font-size: 25px;

}
</style>
