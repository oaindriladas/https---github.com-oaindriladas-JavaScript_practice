function factorial()
{
    let num=5, fact =1; // 5*4*3*2*1
    for(let i=1; i<=num; i++)
    {
fact= fact*i;
    }
    console.log("Factorial is: "+fact)
}
factorial();