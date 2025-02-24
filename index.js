// function myFun(num){
//     let a=10
//     b=num
//     c=a+b
//     complte()
//     return c
    
// }

// console.log(myFun(60));


// function complte(){
//     console.log("completed");
// }
// function three(c){
//     myFun()
//     d=c
//     d++
//     return d

// }
// console.log(three(10));
 
//arrow function 

// myFun=(a,b)=>{
// c=a+b;
// return c
// }

// console.log(myFun("super","man"));
// alert(myFun("bat","man"))

//string methods

// let a="shifas";
// let b=11;
// console.log(a.indexOf("r"));
// console.log(a.length);
// console.log(a.includes("ari"));
// console.log(typeof parseInt(a));

// console.log(typeof b.toString());/


// Array methods

// let ar=[1,3,4]
// ar.push("2")
// ar.pop()
// ar.unshift(2)
// ar.shift()
// ar.splice()
// ar.sort()
// ar.reverse()  

// console.log(ar);

//spread operators------------


//strings and variables are immutable cannot edit when change the refferenced passed to another variable
//example
// const cars="lamborgini"
// let car1=cars
// car1="maruthi"
// console.log(car1);
// console.log(cars);

//in case of arrys and objects they are mutable can be manipulate

//in objects--------------------

// const globalPlayers={
//     name:"sachin",
//     id:0,
// power:100
// };

// const player1=globalPlayers
// to avoid this mutable problem we can use spread operator

// const player1={...globalPlayers}
// player1.power=50
// console.log(globalPlayers);
// console.log(player1);

//in arrays ----------------

// const playes=["ajay","rahul","virat"]
// const playes2=["manju","chinchu","ranju"]
// const mixed=playes.concat(playes2)
// console.log(mixed);

// const player1=[...playes,"sanju",...playes2]
// player1.push("damu")

// console.log(playes);
// console.log(player1);

//DESTRUCTURING
// Rest-----------------------
//IN ARRAYS
// const globalplayers=["ramu","raju","saju"]

// const [one,two,three]=globalplayers

// console.log(one.replace("ramu","ranju"));

//IN OBJECTS

// const marvels={name:"tonny",age:60,place:"us"}
// const {name,...rest}=marvels

// console.log(marvels);
// console.log(name);
// console.log(rest);

//Arrow

const players=[{id:0,name:"sachu",age:30},{id:1,name:"robert",age:33},{id:2,name:"manoj",age:36}]

// for(i=0;i<=players.length;i++)
// {                                     -------normal for loop for printing this array
//     console.log(players[i].name);
// }

//for each ethod for print this array---------- 

// players.forEach((value,index,array)=>{
//     console.log(value.age,value.name);
//     console.log(index);
//     console.log(array);  
// });

//it returns same array

//MAP function--------------
// players.map((value)=>{
// console.log(value.age);

// })
//it returns a new array

//FILTER loop------------------

//  const newPlayer=players.filter((value)=>value.name==="sachu")
 
//REDUCE_______________--------------
// const number=[10,20,30,400,50]
// const newPlayer=number.reduce((total,value)=>
// total+value,0)

//FIND--------------------
// const newPlayer=players.find((value)=>value.name==="sachu")
//-------------------------------
//----------CHAINING---------------
//take values from nested objects or array

// const newPlayer={
//     id:0,
//     names:{name:"ramu",name:"balu",name:"sanu"},
//     age:30
// }
// if(newPlayer&&newPlayer.names.name==="sanu"){
//     console.log(newPlayer.names.name);
    
// }

//instead of writing like this we can use 

// if(newPlayer?.names?.name){
//     console.log(newPlayer.names.name);
    
// }
// console.log(newPlayer);

// chaining of all high order methods

// const totals=[30,20,50,40,70]

// const chains=totals.map((value)=>value).sort((a,b)=>a-b).filter((value)=>value>30).reduce((total,value)=>total+value,0)

// console.log(chains);

let inputData=document.querySelector("#input")
console.log(inputData.value);
let login=document.getElementById("btn")
let logOut=document.querySelector("#btns")
let head=document.getElementById("h")

login.onclick=()=>{
    if(inputData.value==""){
        alert("input field is empty")

    }
    if(inputData.value){
        localStorage.setItem("login",inputData.value)
        head.innerHTML=`wlcome  ${inputData.value}`
        
    }

}
window.onload=()=>{
    const user=localStorage.getItem("login")
    if(user){
        head.innerHTML=`welcome  ${user}`
    }
}
const userOut=()=>{
    localStorage.clear()
    location.reload()
}
logOut.addEventListener("click",userOut)