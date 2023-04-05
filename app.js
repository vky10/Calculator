const buttons=document.querySelectorAll('button');
const screen=document.getElementById('screen');

for(let btn of buttons){
    btn.addEventListener('click',(e)=>{
        const btntext=btn.innerText;
        
        if (btntext==='C'){
            screen.value="";
        }
        else if(btntext==='X'){
            screen.value+='*';
        }
        else if(btntext==='='){
            try{
            screen.value=eval(screen.value);
        }
        catch(e){
            screen.value='Invalid Operation';
        }
        }
        else{
            screen.value=screen.value + btntext;
        }

    });
}