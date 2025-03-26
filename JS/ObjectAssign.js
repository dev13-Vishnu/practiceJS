let target = {a: 1};
let source = {b:2, c:3};

Object.assign(target,source);

console.log("target:",target);

let obj1 = {a: 1};
let obj2 = {b: 2};
let obj3 = {c: 3};

let merged = Object.assign({},obj1, obj2, obj3);

console.log("merged:",merged);

let target1 = {a: 1, b: 2};
let source1 = {b: 3, c: 4};

Object.assign(target1,source1);

console.log("Overwritten target1:",target1);

    