function fadeIn(elem){
    "use strict";
    elem.style.display="block";
    elem.style.opacity=0;
    var i=0;
    var inte = setInterval(function(){
        elem.style.opacity= Number(elem.style.opacity)+0.3;
        if(i>=1.2){
            clearInterval(inte);
        }
        else{
            i++;
        }
    },100);
}
function hide(elem){
    elem.style.display="none";
}
window.onload=function(){
    "use strict";
    var  encodeEnter=document.getElementById("encodeEnter"),
    decodeEnter=document.getElementById("decodeEnter"),
    decBack=document.getElementById("decBack"),
    decBtn=document.getElementById("decBtn"),
    encBtn=document.getElementById("encBtn"),
    encText=document.getElementById("encText"),
    decCode=document.getElementById("decCode"),
    mainDiv=document.getElementById("mainDiv"),
    encodeDiv=document.getElementById("encodeDiv"),
    encBack=document.getElementById("encBack"),
    encResult=document.getElementById("encResult"),
    decResult=document.getElementById("decResult"),
    letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","\n"],
    simbolos=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..","-----",".----","..---","...--","....-",".....","-....","--...","---..","----.","^","\n"];
    /// encode
    encodeEnter.onclick=function(){
        hide(mainDiv);
        fadeIn(encodeDiv);
    }
    encBack.onclick=function(){
        hide(encodeDiv);
        fadeIn(mainDiv);
    }
    encBtn.onclick=function(){
       var txt=encText.value.trim().toUpperCase().split(""),
       code="";
       for(var i in txt){
           code+=simbolos[letras.indexOf(txt[i])]+" ";
       }
       encResult.innerText=code;
       fadeIn(encResult);
    }
   
    decodeEnter.onclick=function(){
        hide(mainDiv);
        fadeIn(decodeDiv);
    }
    decBack.onclick=function(){
        hide(decodeDiv);
        fadeIn(mainDiv);
    }
    decBtn.onclick=function(){
        var code=decCode.value.trim().replace(/_|¯|—|–/g,"-").split(" "),
        txt="";
        
        for(var i in code){
            txt+=letras[simbolos.indexOf(code[i])];
        }
        decResult.innerText=txt.replace("sin definir","");
        fadeIn(decResult);
    }
    
}