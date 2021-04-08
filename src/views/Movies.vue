<template>



<template v-if="getMovies">

    <div class="container">
        <div class="row">
            <template v-for="movies in getMovies.results" :key="movies.item">
                <div class="col-lg-3">
                    <router-link :to="{ path: `/Details/${movies.id}` }">
                    <img class='img-thumbnail' :src="`http://image.tmdb.org/t/p/w185${movies.poster_path}`" />
                    </router-link>
                </div>
            </template>
        </div>
    </div>


</template>

<template v-else>
<h2>No movies found <br /> :</h2>
</template>


  
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'Movies',
    computed: {

        ...mapGetters({
            getMovies: 'movieStore/getMovies'
        })

    }

}
</script>

<style >

h2 {
    position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}



</style>