const input=document.getElementById("numOfwords");
const container=document.querySelector(".container")
const generateWord=(n)=>{

    const letter="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let text="";
    for(let i=0;i<n;i++)
    {
        text+=letter[(Math.random()*25).toFixed(0)];
        
    }

    return text;
}; 
let numOfWords;
const generatePara=()=>{
    numOfWords=Number(input.value);
    const para=document.createElement("p");
    let data="";
    for(let i=0;i<numOfWords;i++)
    {
        const randomNumber=(Math.random()*15).toFixed(0);
        data+=generateWord(randomNumber);
        data+=" ";
    
    }

    para.innerText=data;
    para.setAttribute("class","paras");
    container.append(para);
};