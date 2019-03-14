let news = [];
let page = 20;

async function fetchNews() {
  let url =
    `https://newsapi.org/v2/everything?pageSize=${page}&q=Apple&from=2019-03-13&sortBy=popularity&apiKey=ecefa49813d6400bbe56135f96b08645`;
  let results = await fetch(url);
  let data = await results.json();
  news = data.articles;
  render();
}

function render() {
  document.getElementById(
    "total-stories"
  ).innerHTML = `<center>Number of stories currently: ${news.length}</center>`;
  document.getElementById("news-stories").innerHTML = news.map(
    article => `
        <div class="news-story d-flex border border-success rounded p-5 m-2">
        <div class="news-content col-6">
          <h2>${article.title}</h2>
          <p>${article.source.name}</p>
          <p>${moment(article.publishedAt)
            .startOf("hour")
            .fromNow()}</p>
          <p>${article.description}</p>
          <p><a href="${article.url}">Read More</a></p>
        </div>
        <div class="news-imgage col-3">
          <img class='img-thumbnail'
            src="${article.urlToImage}"
          />
        </div>
      </div>`
  );
  // moreNews = news.length;
}

let loadMore = () => {
  page += 20;
  // alert(moreNews);
  fetchNews();
};


let loadBtn = document.querySelector('#load-more');
loadBtn.addEventListener('click', loadMore);

fetchNews();
