// Return the index of the found array item

function linearSearch(value, list) {
    let found = false;
    let position = -1;
    let index = 0;
  
    while(!found && index < list.length) {
        if(list[index] == value) {
            found = true;
            position = index;
        } else {
            index += 1;
        }
    }
    return position;
}

arr = [1,9,3,4,7,6,5,8,2]

console.log(linearSearch(5, arr)) // Return 6 found

console.log(linearSearch(11, arr)) // Return -1 not found

// / o(n) complexity