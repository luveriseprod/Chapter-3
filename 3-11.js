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
        switch (user.articles.length) {
            case 0 || 1: console.log("Need to add more articles!");
            case 2 || 3: console.log("Great start!");
            default: console.log("Keep it up!");
        }
    } else {
        console.log("User is empty");
    }
};

artUser(user)
