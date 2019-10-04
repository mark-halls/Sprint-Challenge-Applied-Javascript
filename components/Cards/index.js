// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const CardBuilder = article => {
  const card = document.createElement("div");
  card.classList.add("card");

  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = article.headline;
  card.appendChild(headline);

  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const name = document.createElement("span");
  author.classList.add("author");
  imgContainer.classList.add("img-container");
  img.src = article.authorPhoto;
  name.textContent = `By ${article.authorName}`;
  author.appendChild(imgContainer);
  author.appendChild(name);
  imgContainer.appendChild(img);
  card.appendChild(author);

  return card;
};

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(res => {
    const cardsContainer = document.querySelector(".cards-container");
    const articles = res.data.articles;
    const topics = Object.keys(articles);

    topics.map(topic => {
      articles[topic].map(article => {
        cardsContainer.appendChild(CardBuilder(article));
      });
    });
  })
  .catch(err => console.error(err));
