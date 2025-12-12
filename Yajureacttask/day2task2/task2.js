//task2:
//"this" losing context
const user= {
    name: "Yazu",
    login: function() {
        console.log(this.name);
    }
};

const userlogin = user.login.bind(user);
userlogin();
