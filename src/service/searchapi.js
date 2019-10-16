import axios from 'axios';

const apikey = '10f19e22f5722216d498a1ab7b0fa150';

export default {
    getAllMovies(data, callback) {
        console.log(data);
        return axios
            .get(
                `https://api.themoviedb.org/3/search/movie?include_adult=false&query=${data.search}&language=en-US&api_key=0e0c6a39176a96124741f8a7a92fb67d`,
        )
            .then((response) => {
                if (data.search) {
                    // const searchMatch = {
                    // name: {
                    // $regex: data.search,
                    // $options: 'i',

                    // },
                    // };
                    callback(response.data);
                }
            })
            .catch(error => error);
    },

};
