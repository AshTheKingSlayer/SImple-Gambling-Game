

const HIGHER=document.getElementById("HIGHER");
const LOWER=document.getElementById("LOWER");
const DICE=document.getElementById("DICE");
const MIN=1;
const MAX=6;
let result1;
let result2;

DICE.onclick = function(){
    
    result1=Math.floor(Math.random()*MAX)+MIN;
    console.log(result1);
    
    result2=Math.floor(Math.random()*MAX)+MIN;
    console.log(result2);

}
