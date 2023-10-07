let user = {
    name: "Alex",
    age: 27,
    articles: [{ name: "React" }, { name: "JavaScript" }, { name: "New cource" }],
  };
  function logUserArticles() {
    let userArticles = this.articles;
  
    userArticles.forEach((article, index) => {
      console.log(`Article ${index + 1} name is ${article.name}`);
    });
  };
  user.logArticles = logUserArticles;
  user.logArticles();