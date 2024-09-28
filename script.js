
let value=0
let step=1
let num=document.querySelector('.num')
num.innerHTML=value

function minus(){
    value-=step
    show()
}
function plus() {
    value+=step
    show()
}
function show(){
    num.innerHTML=value
}

function stepFunc(){
    let a = document.querySelector('.mybtn')
    if(step===1){
        step=2
        a.innerHTML='<small>Active Even</small> click Odd'
    } else {
        step=1
        a.innerHTML='<small>Active Odd</small> click Even'
    }

}


function plusTen(){
    value+=10
    show()
}

function minusTen(){
    value-=10
    show()
}

function reset(){
    value=0
    show()
}