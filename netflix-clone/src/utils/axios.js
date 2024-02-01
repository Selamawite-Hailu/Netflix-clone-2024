import axios from 'axios'

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
})
export default instance;
// 667cce18776c8948b7d81d5eb806dd4f



// https://api.themoviedb.org/3/movie/top_rated?api_key=667cce18776c8948b7d81d5eb806dd4f&language=en-US