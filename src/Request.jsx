const key='12d53cd0b37a21c52c5f132f751a25db'

const requests={
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestUpComing:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestLatest:`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`
}    

export default requests