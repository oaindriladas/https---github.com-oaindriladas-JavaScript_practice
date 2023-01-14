let ar_2d=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
// [
// 1 0 0   00 01 02
// 1 1 0   10 11 12
// 1 1 1   20 21 22
// ]
let i,j;
// for(i=0;i<3;i++) //rows
//     {
//         for(j=0;j<3;j++)
//         {
//             console.log(ar_2d[i][j]);
//         }
//     }
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
          if (i>=j) {
            document.write("1 ");
          } else {
            document.write("0 ");
          }
        }
        document.write("<br>");
      }
let input= [10, -20, 80, -90, 91, 81];
output=[-20, -90];

//input.map(negative);
let neg_arr=[];
neg_arr.push(input.map(negative));
function negative(num)
{
    if(num<0)
    return num;
}
console.log(neg_arr);

// let s = "I like coding";
// let vowels = [ 'a','e', 'i', 'o', 'u'];
let inputString = "I like coding";
let vowels = inputString.match(/[aeiouAEIOU]/g);
console.log("Vowels in the string: " + vowels);
