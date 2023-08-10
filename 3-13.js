let user = {
  name: "Alex",
  age: 27,
  articles: [
    {
      name: "React",
    },
    {
      name: "JavaScript",
    },
    {
      name: "New cource",
    },
    {
      name: "Angular",
    },
    {
      name: "Type Script",
    },
  ],
};

const userArticles = (user) => {
    let arr = user.articles;
    arr.forEach((article, index) => {
        console.log(`Name article: №${index + 1} ${article.name}`);
    });
}
userArticles(user)

user.articles = user.articles.map(article => {
    article.text = "Text article"
    return article;
});
console.log(user);

let allArticles = user.articles.reduce((prev, curr) => {
  return prev + " " + curr.name;
}, ""); 
console.log(allArticles);


