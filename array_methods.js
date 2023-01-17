let cars = ['sedan', 'hatchback', 'SUV'];
console.log(cars);
console.log(cars.toString());
console.log(cars.length);
console.log("The first car is: "+cars[0]);


cars.push('limousine');
console.log(cars.pop());

cars.forEach((element)=>{
    console.log(element.toUpperCase());
    })

let numbers= [90,10,120,30];
console.log(numbers.reverse());
var new_arr= cars.concat(numbers);
console.log(new_arr);

console.log("first element is: "+numbers.shift());
console.log(numbers.unshift(50,60,70));
console.log(numbers);
console.log(numbers.slice(2,7));
console.log(numbers.splice(1, 2));
console.log(numbers);
console.log(numbers.join('+'));

let square_num= numbers.map(square);
function square(num)
{
    return num*num;
}
console.log(square_num);

let v = square_num.filter(greater);
function greater(num)
{
    return num>5000;
}
console.log(v);


