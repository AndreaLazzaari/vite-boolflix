import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    filmList : [],
    serieList: [],
    apiFilmUrl: 'https://api.themoviedb.org/3/search/movie',
    apiKey: 'dbeb26ebf395d596dd90cfd3f886c89f',
    apiSerieUrl: 'https://api.themoviedb.org/3/search/tv',

    getFilm(searchContent = ''){
        console.log(searchContent)

        axios.get(this.apiFilmUrl, {
            params: {
              api_key: this.apiKey,
              query: searchContent,
            }
          })

            .then((response) => {
                // handle success
                console.log(response);
                this.filmList = response.data.results
                
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        },

    getSerie(searchContent = ''){
        console.log(searchContent)
        
        axios.get(this.apiSerieUrl, {
            params: {
              api_key: this.apiKey,
              query: searchContent,
            }
          })

            .then((response) => {
                // handle success
                console.log(response);
                // this.serieList = response.data.results
                
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
}); 