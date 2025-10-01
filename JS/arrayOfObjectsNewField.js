let arr = [{place :"kochi"}, {place: "aluva"}]

for(let obj of arr) {
    if(obj.place === "aluva") {
        obj.name = "aslam"
    }
}

console.log(arr);