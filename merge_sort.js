let input = [30, 20, 90,19, 89, 10, 100, 65];
let left, right, mid;

function merge(left, right){

}
function mergesort(input){
left =0; right= input.length, l_arr=[], r_arr=[];
if(input.length<=1)
return input; 
 //hint : change this line of code
mid=(left+right)/2;  // mid=3
l_arr=mergesort(input.slice(left, mid));
r_arr=mergesort(input.slice(mid+1, right));
//mergesort(r_arr);
return merge(l_arr, r_arr);
}
console.log(mergesort(input));
// // [30, 20, 90,19, 89, 10, 100, 65]
// left =0, right=7, mid =0+7/2=3
// l_arr= [30, 20, 90,19]
// left =0, right=3, mid =1
// l_arr= [30,20]
// r_arr=[90,19]
// l_arr = 30
// r_arr= 20