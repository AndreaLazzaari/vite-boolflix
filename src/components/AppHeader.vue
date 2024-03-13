<template lang="">
   <header>
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand">Boolflix</a>
            <!-- <form class="d-flex" role=""> -->
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model='searchUsers'>
                <button class="btn btn-outline-success" type="submit" @click='store.getFilm(searchUsers), store.getSerie(searchUsers)'>Search</button>
            <!-- </form> -->
        </div>
</nav>
   </header>
</template>
<script>
import { store } from '../assets/js/store';
export default {
    data() {
        return {
            store,
            searchUsers : '',
            
        }

    },
    methods: {
       
    },
    created() {
        
    },
}
</script>
<style lang="">
    
</style>