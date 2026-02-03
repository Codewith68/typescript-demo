class Product{
    private name:string;
    private price:number|undefined;
    readonly catagory:string; // only changeble in the constructor
    readonly tags:string[]; // readonly is like const in js reassign a value allowed but not the redeclaration 
    constructor(name:string,catagory:string,price:number){
        this.name=name;
        this.catagory=catagory;
        this.price=price;
        this.tags=["electrinics","mobile"];
    }
    display():void{
        this.tags[0]="somethins";
        console.log(`product name is ${this.name} and product price is ${this.price} and tag name is ${this.tags}`);
    }
    setPrice(p:number):void{
        if(p<=0) return 
        this.price=p;
    }

}

const p1=new Product("iphone","electronics",39423419);
console.log(p1)
p1.setPrice(-20)
console.log(p1);
p1.display();
