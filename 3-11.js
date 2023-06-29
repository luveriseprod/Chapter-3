let user = {
  name: "Alex",
  age: 27,
  articles: [
    { 
        name: "React" 
    }, 
    { 
        name: "JavaScript" 
    }, 
    { 
        name: "New cource" 
    },
    { 
        name: "Angular" 
    },
    { 
        name: "Type Script" 
    },
  ],
};

function artUser (user) {
    if (user.name) {
        console.log(`User ${user.name} has ${user.articles.length} articles`);
        switch (true) {
            case user.articles.length<2: console.log("Need to add more articles!");
            break;
            case user.articles.length<5: console.log("Great start!");
            break;
            default: console.log("Keep it up!");
        }
    } else {
        console.log("User is empty");
    }
};

artUser(user)
