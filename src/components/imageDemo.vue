.<template>
  <div class="imagesection mb-3">
    <div class="container">
      <div class="row ">
        <div class="col-md-3" v-for="item in items" v-bind:key="item.index">
          <!-- concate Image Url-->
          <!-- <div>
              <img :src= "'https://image.tmdb.org/t/p/w370_and_h556_bestv2' + item.poster_path" class="card-img" alt />
            </div> -->
  
          <!-- < common for _each and for loop> -->
          <div>
            <img :src="item.poster_path" class="card-img" alt />
          </div>
          <div class="title">{{item.title}}<br/>{{item.id}}<br/>{{item.release_date}}</div>
        </div>
      </div>
      <!-- <div class="row">
        <div class="col-md-10">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <div class="col-md-2">
          <button type="button" class="btn btn-primary">Search</button>
        </div>
      </div> -->
    </div>
  
  
    <div>
    </div>
  </div>
</template>

<script>
import movieapi from "@/service/movieapi.js"; //calling api service
// import _ from "lodash"; //when install the lodash import this package and import loadash in main.js

export default {
  data() {
    return {
      item: "",
      items: [],
      callback: ""
    };
  },
  created() {
    this.getapi(); //create a function that is to be called in api service
    this.searchapi();
  },
  methods: {
    //  <---Using _each Loop--->
    getapi() {
      movieapi.getmovies(data => {
        console.log("this is imagesdemo", data.results);
        _.each(data.results, n => {
          n.poster_path = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${
            n.poster_path
          }`;
        });
        this.items = data.results;
        console.log("items", this.items);
      });
    },
    searchapi(searchParams) {
      this.reformattedSearchString = searchParams.join(" ");
      this.api.q = searchParams.join("+");
      const { baseUrl, part, type, order, maxResults, q, key } = this.api;
      const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${key}`;
      this.getData(apiUrl);
    }
  }
};

//  <--Concate method-->
//   getapi() {
//     movieapi.getmovies(data => {
//       console.log("this is imagesdemo", data.results);
//       this.items = data.results;
//       console.log("items", this.items);
//     });
//   }
// }

// <---Using For Loop--->
//   getapi() {
//     movieapi.getmovies(data => {
//       console.log("here:", data.results.length);
//       for (let i = 0; i < data.results.length; i++) {
//         data.results[
//           i
//         ].poster_path = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${
//           data.results[i].poster_path
//         }`;
//       }
//       this.items = data.results;
//     });
//   }
// }
</script>

<style lang="scss">
// .title {
//   margin-top: 103px;
// }
</style>

