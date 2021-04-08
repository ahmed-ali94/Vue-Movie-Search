<template>
  <div class="div">

      <div class="contianer">

          <img :src="`http://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`" />

          <h4>{{movieDetails.title}}</h4>
          <p> {{movieDetails.description}} </p>

      </div>
      
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Details',
    data() {
        return {
            movieDetails: {
                title: '',
                description: '',
                backdrop_path: ''
            }
                

        }
        
        
    },
    methods: {

        async getMovieDetails(id)
        {
            try {
                
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c2293950755394e5c99ca7f387cb2c2d&append_to_response=videos,images,credits,similar`)

                this.movieDetails.title = response.data.title
                this.movieDetails.description = response.data.overview
                this.movieDetails.backdrop_path = response.data.backdrop_path

                //console.log(response.data)
                
            } catch (error) {

                console.log(error.response.data)
                
            }
            
        }

    },

    beforeMount()
    {
        this.getMovieDetails(this.$route.params.id)
    }
    

}
</script>

<style>

</style>