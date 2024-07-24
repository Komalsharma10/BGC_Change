const body=document.querySelector('body')
const buttons=document.querySelectorAll('.button')

buttons.forEach(function(btn){
    btn.addEventListener("click",function(val){
        if(val.target.id==="red"){
            body.style.backgroundColor=val.target.id;
            btn.innerText="your color is changed";
        }
        if(val.target.id==="pink"){
            body.style.backgroundColor=val.target.id;
            btn.innerText="your color is changed";
            

          }
        if(val.target.id==="green"){
            body.style.backgroundColor=val.target.id;
            btn.innerText="your color is changed"
        }
        if(val.target.id==="blue"){
            body.style.backgroundColor=val.target.id;
            btn.innerText="your color is changed"

        }
    })
})