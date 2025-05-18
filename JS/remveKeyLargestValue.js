const obj = {
    a: 2,
    b: 5,
    c:1
}

function removeLargest (obj) {
    let maxkey = null;
    let maxValue = -Infinity;

    for(let [key,value] of Object.entries(obj)){
        if(value >= maxValue){
            maxValue = value;
            maxkey = key;
        }
    }
    delete obj[maxkey];
}
removeLargest(obj);
console.log( obj)