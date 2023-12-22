import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    filmList : [],
    apiUrl: 'https://api.themoviedb.org/3/search/movie',
    apiKey: 'dbeb26ebf395d596dd90cfd3f886c89f',
    

    getFilm(searcContent = ''){
        console.log(searcContent)

        axios.get(this.apiUrl, {
            params: {
              api_key: this.apiKey,
              query: searcContent,
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
    }
}); 