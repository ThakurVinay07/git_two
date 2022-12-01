
PROBLEM_1. check the number is prime or not.

let num = 11;  

let i=1;

let factor=0;

for (let i=1; i<=num; i++){

if(i%num==0)

factor++
}

if(factor==2){
 console.log("Yes")
}
else{
console.log("No")
}








PROBLEM_2   Check whether a string is palindrome or not

let str= ["madam"]

let bag= "";

 for(let i=str.length-1; i>=0; i--){

(bag+=str[i])
}
if(bag == str){
console.log("Yes")
}
else{
 console.log("No")
}