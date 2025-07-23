function reverseArrayDplace(arr, d){
    
    //reverse array by 2 places right clockwise 1,2,3,4,5 -> 5,1,2,3,4
    // T.C - O(N* D)
    let n = arr.length;
    for(let i = 0; i<d; i++){
        let first = arr[0];
        for(let j = 0; j < n-1; j++){
            arr[j] = arr[j+1];
        }
        arr[n-1] = first;
    }


  //JS based code  
    // d %= arr.length;
    // let shift = arr.splice(-d); //-d means removes last 2 elements
    // arr.unshift(...shift);
    
}

 let arr = [1,2,3,4,5];
 let d = 2;
 reverseArrayDplace(arr, d);

console.log(arr.join(' '));
 
    