

function User(name) {
    this.name = name
};

function Article(name, text) {
    this.name = name,
    this.text = text
};

let user = new User("Alex");
user.id = 3;
Object.defineProperty(user, "id", {
    writable: false
});
user.id = 234

user.getInfo = function() {
    return `User ${this.name} has ${this.articles.length} articles`
};

console.log(user);

let article1 = new Article("React", "it is awesome");
let article2 = new Article("JS", "it is BEAUTIFUL");

user.articles = [article1, article2];

console.log(user.getInfo());





