// // types in typescript
// //
// let id:number=5
// console.log(id)
// let firstName="subrat"
// // firstName=false // ts compiler throws error 
// console.log(id,firstName)

// // union of types
// let userId:boolean|number=true;
// console.log(userId);
// userId=56;
// console.log(userId)
// let idss:any=12;
// idss='rtg';
// idss=true;
// console.log(idss)


// /**
//  * arrays
//  */


// let num:number[]=[3,5,4,2];
// console.log(num)

// let ids:any[]=["ngnk",4,true,533,"jrgzk"];
// console.log(ids);


// objects using interface

// interface Product{
//     name:string,
//     price:number,
//     display():void
// }


// let p1:Product={
//     name:"subrat",
//     price:4244234,
//     display:()=>{
//         console.log("display")
//     }
// }
// console.log(p1.display,p1)

// function in ts

// function sum(a:number,b:number):number{
//     return a+b;
// }
// console.log(sum(25,63))


// finction expression 


// let sum=():number=>{
//         return a+b;
// }
// let a=39;
// let b=435
// console.log(sum());

// date object in ts

// const dt=new Date(2005,3,12)
// console.log(dt)

// console.log(dt.getDate())


// ant types of objects
// if you want to define a  variable with type any ,then either you can write ":any" while declaring the variable
// or simply do not asssign any value at the time of declaration its considered as any 
// let x; //this svariable x is type of any 
// x="10"
// x=10;
// //void function 

// function fun():void{
//         console.log("hello from fun");
// }
// fun();
// fun();
// fun();
/**
 * ENUMS  OR Enumeration
 * 
 * ticket[]
 * 
 */

// enum ticketStatus{
//     INITIALIZED,
//     CANCELED,
//     PENDING,
//     CLOSED
// }


// const ticket={
//     id:1,
//     title:"new ticket ",
//     status:ticketStatus.CLOSED
// }

// if(ticket.status==ticketStatus.CLOSED){
//     console.log("Done")
// }


type details={ name:string,marks:number,adress?:string}
let result:details={
    name:"subrat",
    marks:98
}
console.log(result);

// now we can updating a old key value pair
result.name="jina"

result.adress="balugaon"// we cant add a new key value pair 

