// fib 

function fibs(n, array = [0,1]){
    if (array.length > n) return array.slice(0, n);
    const newNum = array.at(-1) + array.at(-2);
    array.push(newNum);
    return fibs(n, array)
}

// console.log(fibs(8));


// merge sort

function mergeSort(array){
    if (array.length <= 1) return array; // base case 
    
    const mid = Math.floor(array.length/2); // get the half length 
    const left = mergeSort(array.slice(0, mid)); // recurse the left half  
    const right = mergeSort(array.slice(mid)); // recurse the right half 
    console.log(left); console.log(right)
    const mergedArray = []; 

    while (left.length > 0 && right.length > 0){
        let arrayMin;

        if(left[0] < right[0]){
            arrayMin = left;
        } else {arrayMin = right}  // gets subarray with smallest [0] value

        const mergeEle = arrayMin.shift(); //pops out element first element from arraymin
        mergedArray.push(mergeEle); // pushes element to mergedarray
    }
    return mergedArray.concat(left, right); // merges sorted left and right parts
}

console.log(mergeSort([5,10,25,-1,3,18,-4,7,18])); 