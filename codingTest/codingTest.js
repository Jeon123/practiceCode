// 1 <= n <= 16
const n = 5;

//[9, 20 , 28, 18, 11]
const arr1 = [9, 20, 28, 18, 11];

//[30, 1 ,21, 17, 28]
const arr2 = [30, 1 ,21, 17, 28];

const fillZero = (a, b, c) => {
    let str = (a | b).toString(2);
    if(str.length !== c) {
        while(str.length < c ) {
            str = 0 + str;
        }
    }
    return str.replace(/1/g, '#').replace(/0/g, ' ');
} 

let arr = [];

for(let i = 0; i < n; i ++) {
    arr.push(fillZero(arr1[i], arr2[i], n));
} 
console.log(arr);