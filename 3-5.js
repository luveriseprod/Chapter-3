let articles = ["JavaScript", "Technologies", "React"]
console.log(articles)

articles.push("Angular");
console.log(articles);

let firstArticle = articles.shift();
console.log(firstArticle);
console.log(articles);

let indexOfAngular = articles.indexOf("Angular");
console.log("Номер статьи Angular: ", indexOfAngular + 1);

