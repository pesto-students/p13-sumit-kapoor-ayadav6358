// Put your solution here

function divideArray(number){
    let evenNumber = [];
    let oddNumber = [];
    for(let num of number){
        if(num % 2 ==0) {
            evenNumber.push(num)
        }
        else {
            oddNumber.push(num);
        }
    }
    evenNumber.sort((a,b)=>a-b);
    oddNumber.sort((a,b)=>a-b);
    console.log("evenNumber=>", evenNumber);
    console.log("oddNumber=>", oddNumber);
}


// Test cases
let nums1 = [4, 2, 9, 1, 8];
divideArray(nums1);

let nums2 = [4, 2, 8];
divideArray(nums2);


// output 

// evenNumber=> [ 2, 4, 8 ]
// oddNumber=> [ 1, 9 ]
// evenNumber=> [ 2, 4, 8 ]
// oddNumber=> []