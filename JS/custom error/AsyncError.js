class DatabaseError extends Error{
    constructor(message){
        super(message);
        this.name = "DatabaseError";
    }
}


async function fetcUsersData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId != 1) {
                reject(new DatabaseError("User not found in the database"));
            } else {
                resolve({id: 1, name: "John"});
            }
        }, 1000)
    })
}

async function getUser() {
    const user = await fetcUsersData(2);
    console.log(user);
}

getUser();