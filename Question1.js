//Search Element Present Or/Not;


//Data Is Given ....
let x = 0;
let arr = [10,25,0,21,45,70,5];
let i;
let n = arr.length;
let index = recSearch(arr, 0, n - 1, x);

//Create A  Function ...
function recSearch(arr, xyz, data, x) {
    if (arr[data] == x){
        return data;
    }else
    if (data < xyz){
        return -1;
    }else
    if (arr[xyz] == x){
        return xyz;
    }
    return recSearch(arr, xyz + 1, data - 1, x);
}


//Condition Present Or Not Element ....
if (index != -1) {
    console.log(`Element ${x} is present at index ${index}`);
}
else {
    console.log("Element is not present " + x);
}
const res = recSearch([10,25,0,21,45,70,5]);


