
function checkPrime(num){
let count=0;
for(i=1; i<=num; i++){
if(num%i==0){
	count++
}
}

if(count==2){
return true;
}

return false;

}

let ans = checkPrime(13);
if(ans == true){
console.log("Number is prime");
}else{
console.log("Number is not prime")
}