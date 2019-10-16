import axios from 'axios';

const apikey = '10f19e22f5722216d498a1ab7b0fa150';

export default {
    getmovies(callback) {
        return axios
            .get(
                `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=iron%20man&page=1&include_adult=false&year=2008`,
        )
            .then((response) => {
                callback(response.data);
            })
            .catch(error => error);
    },

    // getAllMovies(data, callback) {
    //     console.log(data);
    //     return axios
    //         .get(
    //             `https://api.themoviedb.org/3/search/movie?include_adult=false&query=${data.search}&language=en-US&api_key=0e0c6a39176a96124741f8a7a92fb67d`,
    //     )
    //         .then((response) => {
    //             if (data.search) {
    //                 // const searchMatch = {
    //                 // name: {
    //                 // $regex: data.search,
    //                 // $options: 'i',

    //                 // },
    //                 // };
    //                 callback(response.data);
    //             }
    //         })
    //         .catch(error => error);
    // },

};



































