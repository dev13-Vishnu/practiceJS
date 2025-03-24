let usersMap = new Map();
function addUserMap(user) {
    usersMap.set(user,"User data");
}

let userMap1 = {name: "Alice"};
addUserMap(userMap1);

console.log("UsersMap before:",usersMap);

userMap1 = null;

console.log("usersMap after:",usersMap);

let usersWeakMap = new WeakMap();

function addUserWeakMap(user) {
    usersWeakMap.set(user,"User data");
}

let userWeakMap1 = {name: "Alice"};

addUserWeakMap(userWeakMap1);

console.log("User Weak Map before:", usersWeakMap);
userWeakMap1 = null;

console.log("User Weak Map after:", usersWeakMap);