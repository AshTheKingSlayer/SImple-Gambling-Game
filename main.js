

const HIGHER=document.getElementById("HIGHER");
const LOWER=document.getElementById("LOWER");
const DICE=document.getElementById("DICE");
const MIN=1;
const MAX=6;
const answer=document.getElementById("ans");
const display=document.getElementById("display");

let result1;
let result2;
let choice;
var sum;



HIGHER.onclick = function() {
    choice=1;

    DICE.onclick = function(){
    
        result1=Math.floor(Math.random()*MAX)+MIN;
        
        
        result2=Math.floor(Math.random()*MAX)+MIN;
        
        sum=result1+result2;
        console.log(sum);
        answer.textContent = `DICE SUM IS ${sum}`;


        if(sum>8 && choice==1){
            display.textContent="you won";
            
            }else{
               display.textContent="you lost";
            }
    };

};
LOWER.onclick = function() {
    choice=1; 

    DICE.onclick = function(){
    
        result1=Math.floor(Math.random()*MAX)+MIN;
        
        
        result2=Math.floor(Math.random()*MAX)+MIN;
        
        sum=result1+result2;
        console.log(sum);
        answer.textContent = `DICE SUM IS ${sum}`;


        if(sum<8 && choice==1){
            display.textContent="you won";
            
            }else{
               display.textContent="you lost";
            }
    };
};




