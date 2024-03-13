<template lang="">
    <main>
        <div>
            <div class='container'>
                <div class='row'>
                    <div class="card" style="width: 18rem;" v-for='film in store.filmList'>
                        <img src="..." class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">{{ film.title }}</h5>
                                <p class="card-text">{{ film.overview }}</p>
                            </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Titolo originale:{{ film.original_title }}</li>
                                    <li class="list-group-item">Lingua: {{ film.original_language }} </li>
                                    <li class="list-group-item">Voto: {{ film.vote_average }} </li>
                                </ul>
                            <!-- <div class="card-body">
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div> -->
                    </div>

                    <div class="card" style="width: 18rem;" v-for='serie in store.serieList'>
                        <img src="..." class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">{{ serie.name }}</h5>
                                <p class="card-text"> {{ serie.overview }}</p>
                            </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Titolo originale:{{ serie.original_name }}</li>
                                    <li class="list-group-item">Lingua: {{ serie.original_language }} </li>
                                    <li class="list-group-item">Voto: {{ serie.vote_average }} </li>
                                </ul>
                            <!-- <div class="card-body">
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div> -->
                    </div>
                </div>
                
            </div>
        </div>
    </main>
</template>
<script>
import axios from 'axios';
import { store } from '../assets/js/store';
export default {

    data() {
        return {
            store,
        }
    },
    methods: {
        // getFlag(){

        // }
    },
}
</script>
<style lang="">
    
</style>