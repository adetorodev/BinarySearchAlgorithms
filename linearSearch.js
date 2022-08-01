
function LinearSearch(arr, n){
    for(var i=0; i<arr.length;i++){
        if(arr[i]==n){
            return true
        }
    }
    return false
}

arr = [1,2,3,4,5,6,7,8,9]

console.log(LinearSearch(arr, 0))

