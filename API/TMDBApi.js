const API_TOKEN = '783d834600a99b2ddcaf7090850b036d';

export class TMDBApi {
  search(text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + '&page=' + page;
    return fetch(url)
    .then((response) => response.json())
    .catch((error)=> console.log(error));
  }
  getImg(name){
    return 'https://image.tmdb.org/t/p/w300' + name;
  }
}
