function FlattenAndUnique (arr,seen = new Set()) {
	for(item of arr) {
		if(Array.isArray(item)){
			FlattenAndUnique(item, seen)
		} else {
			seen.add(item);
		}
 	}
 	return [...seen];
}
const arr = [1, [2, 3, [4, 2]], 5, [3, [6, 1]]];

console.log(FlattenAndUnique(arr));