import EventEmitter from 'events'

// const myEmitter = new EventEmitter();

class User extends EventEmitter {
    constructor(username){
        super();
        this.username = username;
    }
    loginUser() {
        console.log(`${this.username} is trying to log in..`);

        this.emit('login', this.username);
    }
}

const user1 = new User('Vishnu');

user1.on('login', (username) => {
    console.log(`✅ Login event received: ${username} has logged in.`);
})

user1.loginUser();