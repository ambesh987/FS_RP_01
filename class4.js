// min value in array
// let arr = [13,25,12,48,59,69,78,52,36];

// let min= arr[0];
// for(let i=1; i<arr.length; i++){
//     if(arr[i]<min){
//         min=arr[i];
//     }
    
// }
// console.log(min);


//sum of the array

// let arr =[25,58,95,956,845,275,96235,9845];

// let sum =0;
// for(let i=0;i<arr.length; i++){
//     // sum=sum+arr[i];
//     sum+=arr[i];
// }
// console.log(sum);

// let arr =[25,58,95,956,845,275,96235,9845];

// let sum =0;
// for(let i=0;i<arr.length; i=i+2){
//     sum=sum+arr[i];
//     // if(i%2!=0){
//     // sum+=arr[i];
//     // }
// }
// console.log(sum);

//2D array

let arr= [[1,2,3],
          [4,5,6],
          [15,19,16]];

          // arr[0][2]+arr[1][1]+arr[2][0]
let sum =0;
for(let i=0; i<arr.length;i++){
    for(let j=0; j<arr[i].length;j++){
        if(i+j==arr.length-1){
        sum+=arr[i][j]
        }
    }
}
console.log(sum);

// let sum =0;
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//        if(arr[i][j]%3==0){
//         sum+=arr[i][j];
//        }
//     }
// }
// console.log(sum);

// const numbers= [1,2,3,4,5];
// const numbers="manat"
// for(const num of numbers){
//     console.log(num);
// }

// for in

const person={
    name:"john",
    age:30,
    city:"New York"
};

for(const key in person){
    console.log(`${key}:${person[key]}`);
}