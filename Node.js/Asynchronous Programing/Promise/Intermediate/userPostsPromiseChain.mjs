function getUser(id) { 
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log('Fetching user...');
            resolve({id,name:"Vishnu"});
        }, 2000);
    })
}

function getPosts(useId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Fetching posts for user ${useId} `);
            resolve([
                {postId: 1, title: "Intro to Node.js"},
                {postId: 2, title: "Leaning Promises"}
            ]);
        }, 1000);
    })
}

getUser(101)
.then(user => {
    console.log("User Fetched:", user);
    return getPosts(user.id);
})
.then (posts => {
    console.log("Posts Fetched", posts);
})
.catch(err => {
    console.error("Error:", err.message);
});