let n1 = 20, n2=30;
n1+=n2;
console.log("value of n1:"+n1+ typeof(n1));
 let fname="Rohit";
 let lname="Sharma";
 console.log(fname+lname+" type of "+typeof(fname));

 var t;
 console.log(t+"type of "+typeof(t));

 if(n1==n1)
console.log("n1 & n2 are not the same");
console.log(typeof(n1==n2));

var student ={ roll_no:12, marks:120, city: "Mumbai"};
console.log(student);
console.log("Roll no is: "+student.roll_no+"city is: "+student.city);

var fruits = [ 'Apples', 'Figs', 'Pears' ];
console.log(fruits);
console.log(fruits[0]+fruits[1]+fruits[2]);
var today = new Date('2022-12-21');
console.log(today);
console.log(typeof(today));
console.log(typeof(fruits));

let person ={ name: "Anna", nation: "USA", bank_account: null};
console.log(typeof(person.bank_account));

var str= 'hello world!';
var str1= "hello world again";
var str2= `hello world once again`;
console.log(`hello ${fname}`);
