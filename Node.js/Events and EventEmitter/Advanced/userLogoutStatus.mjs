import EventEmitter from 'events';


class User extends EventEmitter{
    constructor(username) {
        super();
        this.username = username;
        this.status = "offline";

        //Handles logi event
        this.on('login',() => {
            this.status = 'online';
            console.log(`✅ ${this.username} logged in. Status: ${this.status}`);
        });
        this.on('logout',() => {
            this.status = 'offline';
            console.log(`👋 ${this.username} logged out. Status : ${this.status}`)
        })
    }

    loginUser(){
        this.emit('login');
    }
    logoutUser() {
        this.emit('logout');
    }
}

const user1 = new User('Vishnu');

user1.loginUser()
user1.logoutUser();