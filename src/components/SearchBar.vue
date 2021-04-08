<template>
<div class="container" id="search-bar">
    <form @submit.prevent="search">
        <div class="input-group input-group-lg mb-3" >
        <input type="text" class="form-control w-25" placeholder="Search Movies" aria-describedby="button-addon2" v-model="userInput">
        <div class="input-group-append">
            <button class="btn btn-primary" type="submit" id="button-addon2">Search</button>
        </div>
        </div>
    </form>


</div>
  
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'SearchBar',
    data() {
        return {
            userInput: ''
        }
    },
    methods: {
        ...mapActions({

            getMovies: 'movieStore/getMovies'

        }),

        search() {
            this.getMovies(this.userInput).then( () => {

                this.$router.replace( {

                    name:'Movies'

                })

            }).catch( () => {
                console.log('Failed to get movies')
            })
        }
    }
}
</script>

<style scoped>

#search-bar{
position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}

</style>