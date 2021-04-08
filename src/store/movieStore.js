import axios from 'axios'

export default {
    namespaced: true,
    state: {
        movies: ''
    },
    getters: {

        getMovies(state){
            return state.movies
        }

    },
    mutations: {
        SET_MOVIES(state,movies)
        {
            state.movies = movies
        }
    },
    actions: {
        async getMovies({ commit },searchInput)
        {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c2293950755394e5c99ca7f387cb2c2d&query=${searchInput}`)
                console.log(response.data)

                return commit('SET_MOVIES',response.data)

                
            } catch (error) {

                console.log(error.response.data);
                
            }

        }
    }
   
}