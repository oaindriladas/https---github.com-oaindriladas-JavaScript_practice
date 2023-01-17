//var, let, const

function display()
{
    const a=80; //block scope
    console.log("value of a is "+a);
}

// display();
// let i=10; //global scope
// for(let i =0;i<5;i++)
// {
//     console.log("I love JS!");
//     console.log(i); //local scope
// }
// console.log("value of i: "+i);

function outer_func(outer)
{
    this.outer=outer;
    function inner_func(inner, outer)
    {
        console.log('inner is: '+inner);
        console.log('outer is: '+this.outer);
    }
    inner_func(10,20);
    console.log("inside outer function: "+outer);
}
outer_func(12);
