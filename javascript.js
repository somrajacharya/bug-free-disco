let nam = document.getElementById('inp');
let buttons=document.querySelectorAll('button');
let string="";
let arr=Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            nam.value=string;
        }
        else if(e.target.innerHTML=='AC'){
            string="";
            nam.value=string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);
            nam.value=string;
        }
        else{
            string+=e.target.innerHTML;
            nam.value=string;
        }
    })
})