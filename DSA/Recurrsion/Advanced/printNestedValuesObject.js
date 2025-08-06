function printNestedValues(obj) {
    for(let key in obj){
        const value  = obj[key];
        if(typeof value ==='object' && value !== null) {
            printNestedValues(value);
        } else {
            console.log(value);
        }
    }
}

printNestedValues({ a: 1, b: { c: 2, d: { e: 3 }} });