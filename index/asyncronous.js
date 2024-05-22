// console.log("start execution");

// setTimeout(()=>{
//     console.log("process execution");
// },3000)



// console.log("complete execution");

//drawback of asyncronous

let a=20
let b=30

setTimeout(()=>{

    b=40

},2000)


setTimeout(()=>{
    console.log(a+b)
},3000)





