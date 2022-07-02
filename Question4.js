//Recursive Implementation ....


function SearchNewEle(array,number){
    let min=0;
    let max= array.length-1;
    while(min <= max){
        let minIndex=Math.floor(( min+max)/2);
        if(array[minIndex]< number){
            min = minIndex+1;
          }
          else if(array[minIndex]> number){
              max= minIndex-1;
          }else{
              return minIndex;
          }
    }
    return-1;
}

const result = SearchNewEle([2,3,7,8,9,1,6,1,25,64,20],25);
console.log(result);