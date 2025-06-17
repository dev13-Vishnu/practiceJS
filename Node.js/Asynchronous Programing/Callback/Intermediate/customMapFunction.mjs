function mapArray(arr,callback){
    const result = [];
    arr.forEach(element => {
        result.push(callback(element))
    });
    return result;
}

console.log(mapArray([1, 2, 3], function(num) { return num * 2 }));

