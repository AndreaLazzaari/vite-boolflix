<template lang="">
    <main>
        <div>
            <article v-for='film in store.filmList'>
                {{ film.title }}
            </article>
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
}
</script>
<style lang="">
    
</style>