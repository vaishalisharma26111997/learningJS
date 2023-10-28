const arr=document.body.children;
console.log(arr);
console.log(arr.length);
console.log(typeof arr);
const newArr=Array.from(arr);
console.log(newArr);

const myFun=function(a,b){
    console.log(a+b);

}
myFun(2,9);
const myFun1=(a,b)=>{
    console.log(a+b);

}
myFun1(86,9);



//arr.find
const a=[1,3,5,7,8,9];
const fun2=(value,index)=>{
    if(value===70){
   console.log("7 exist");
    }else
    {console.log("not exist");}
};
a.find(fun2);


//find will retuen only one element if exact match found
// a.find((value,index)=>{
//     if(value===70){
//         console.log("7 exist");
//          }else
//          {console.log("not exist");}
// });

// const result=a.filter((value,index)=>{
//     if(value>4)
//     {
//         return value;
//     }

// });
// console.log(result);


// const result=a.every((value,index)=>{
//     return value>5;

// });

// console.log(result);
const result=a.some((value,index)=>{
    return value>5;

});
console.log(result);

for(let value of a)
{
    console.log(value);
}

a.forEach((value,index)=>{
console.log(value +" "+index);

});
//these array function forach and of will not modify orginal array nor return array so for that we used map function
const ans=a.map((value,index)=>{
    return value;
    
    });
    console.log(ans);
