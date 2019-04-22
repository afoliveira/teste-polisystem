function retornaCatalogo() {
  fetch('https://www.omdbapi.com/?apikey=477f8be0&s=%27star%27')
  .then(res => res.json())
  .then(listMovies => {
    let movies = '';
    listMovies.Search.forEach(listMovie => {
      //Monta a lista com as imagens e nomes dos filmes
      movies += 
      `<li>
        <a href="detailMovie.html?id=${listMovie.imdbID}">
          <div>
            <div class="filmes-catologo-img">
              <img src="${listMovie.Poster}" width="140" height="200">
            </div>
            <div class="filmes-catalogo-nome">
              <h2>${listMovie.Title}</h2>
            </div>  
          </div>
        </a>
      </li>`
    });
    document.querySelector(".filmes-catalogo").insertAdjacentHTML("afterbegin", `${movies}`) 
   })
  .catch(err =>{
    console.error(err);
  })
}
retornaCatalogo();



function retornaDetalhes(params, id) {
  // Pega o valor que tem dentro do parametro id na URL de página
  params = (new URL(window.location).searchParams)
  id = params.get("id");
  
  // Faz a chamada a API na página DetailMovies e retorna as informações referente ao filme escolhido.
  fetch(`https://www.omdbapi.com/?apikey=477f8be0&i=${id}`)
  .then(res => res.json())
  .then(informationMovies => {
    let information = 
    ` <div class="descricao-filme">
        <div class="descricao-filme-principal">
          <div>
            <img src="${informationMovies.Poster}" width="220" height="300">
          </div>
          <div class="descricacao-titulo">
            <h2>${informationMovies.Title}</h2>
            <div class="descricao-lancamento">
              <span class="descricao-ano">${informationMovies.Year}</span>
              <span class="descricao-linguagem">${informationMovies.Language}</span>
            </div>
          </div>
        </div>

        <div class="sinopse">
          <h2>Sinopse</h2>
          <p>${informationMovies.Plot}</p>
        </div>
        
        <div class="descricao-filme-complementar">
          <div class="complementar-informacao">
            <span class="conteudo-titulo">Director</span>
            <span class="content">Dicretor: ${informationMovies.Director}</span>
          </div>
          <div class="complementar-informacao">
            <span class="conteudo-titulo">Rated</span>
            <span class="content">${informationMovies.Rated}</span>
          </div>
          <div class="complementar-informacao">
            <span class="conteudo-titulo">Released</span>
            <span class="content">Released: ${informationMovies.Released}</span>
          </div>
          <div class="complementar-informacao">
            <span class="conteudo-titulo">Write</span>
            <span class="content">${informationMovies.Writer}</span>
          </div>
          <div class="complementar-informacao">
            <span class="conteudo-titulo">Actors</span>
            <span class="content">${informationMovies.Actors}</span>
          </div>
          <div class="complementar-informacao">
            <span class="conteudo-titulo">Metascore</span>
            <span class="content">${informationMovies.Metascore}</span>
          </div>
          <div class="complementar-informacao">
            <span class="conteudo-titulo">imdbRating</span>
            <span class="content">${informationMovies.imdbRating}</span>
          </div>
          <div class="complementar-informacao">
            <span class="conteudo-titulo">Production</span>
            <span class="content">${informationMovies.Production}</span>
          </div>
          <div class="complementar-informacao">
            <span class="conteudo-titulo">Website</span>
            <a href="${informationMovies.Website}" target="_blank" class="content">${informationMovies.Website}</a>
          </div>
          <div class="complementar-informacao">
            <span class="conteudo-titulo">Awards</span>
            <span class="content">${informationMovies.Awards}</span>
          </div>   
      </div>`
  
    document.querySelector(".filmes-descricao").insertAdjacentHTML("afterbegin", `${information}`) 
  })
  .catch(err =>{
    console.error(err);
  })
}
retornaDetalhes();
