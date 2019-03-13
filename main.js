let news = [];

async function fetchNews () {
    let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ecefa49813d6400bbe56135f96b08645';
    let results = await fetch(url);
    let data = await results.json();
    news = data.articles;
    render();
}



function render() {
    document.getElementById('total-stories').innerHTML = `Number of stories currently: ${news.length}`;
    document.getElementById('news-stories').innerHTML = 
    news.map( article => `
        <div class="news-story">
        <div class="news-content">
          <h2>${article.title}</h2>
          <p>${article.source.name}</p>
          <p>${article.publishedAt}</p>
          <p><a href="${article.url}">Read More</a></p>
        </div>
        <div class="news-imgage">
          <img
            src="${article.urlToImage}"
          />
        </div>
      </div>`)
    }


fetchNews();
