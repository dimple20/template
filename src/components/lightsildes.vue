<template>
    <div>
        <ul>
            <li v-for="img in list" v-bind:key="img.index" >
                <img v-lazy="img.src">
            </li>
        </ul>
    </div>
</template>

<script>
import silderone from "../assets/images/pic8.jpeg";
  import sildetwo from "../assets/images/footer (1).png";
  import silderthree from "../assets/images/footer (1).png";
    export default {
        data(){
            return{
                list:[{
            src: silderone,
           
          },
          {
            src: sildetwo,
           
          },
          {
            src: silderthree,
            
          }]
            }
        }
    
    }
</script>

<style>
    
</style>
