class Article {
  constructor(name, text) {
    this.name = name;
    this.text = text;
  }
}

class User {
  constructor(name, articles) {
    this.name = name;
    this.articles = articles;
  }
  logArticles() {
    this.articles.forEach((article, i) => {
      console.log(`${i + 1}. ${article.name}`);
    });
  }
}

let article1 = new Article("React", "React is nice");
let article2 = new Article("Angular", "Angular is also nice");

let user = new User("Alex", [article1, article2]);

console.log(user);

user.logArticles();
