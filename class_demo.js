class vehical{
 constructor(color, type, brand)
 {
this.color=color;
this.type=type;
this.brand=brand;
 }
 display(color, brand)
 {
    console.log("color is: "+this.color+" brand is: "+this.brand);
 }
}
var bike = new vehical("black", "2-wheeler", "TVS");
console.log(bike.color);
bike.display(bike.color, bike.brand);
var auto= new vehical("yellow & black", "3-wheeler", "hyundai");
auto.display();
class car extends vehical{
    constructor(color, type, brand, speed){
        super(color,type, brand);
        this.speed= speed;
    }
    display_car()
    {
        super.display();
        console.log("speed is: "+this.speed);
    }
    display(speed)
    {
        console.log("speed is: "+this.speed);
    }
}
var sedan = new car("red", "4-wheeler", "Toyota", 120);
sedan.display();
sedan.display_car();
sedan.display(120);
