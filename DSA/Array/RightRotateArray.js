function reverseArrayDplace(arr, d){
    
    //reverse array by 2 places right clockwise 1,2,3,4,5 -> 5,1,2,3,4
    // let n = arr.length;
    // for(let i = 0; i<d; i++){
    //     let first = arr[n-1];
    //     for(let j = n-1; j > 0; j--){
    //         arr[j] = arr[j-1];
    //     }
    //     arr[0] = first;
    // }


  //JS based code  
    d %= arr.length;
    let shift = arr.splice(-d); //-d means removes last 2 elements
    arr.unshift(...shift);
    
}

 let arr = [1,2,3,4,5];
 let d = 2;
 reverseArrayDplace(arr, d);

console.log(arr.join(' '));
 
    