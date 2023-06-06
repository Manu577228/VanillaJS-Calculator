let history = document.getElementById('history');

function calculation(v){
    para = document.createElement('p');
    data = v + " = " + eval(v);
    para.innerText = data;
    history.appendChild(para);
    return eval(v);
}

//code for backspace
function backspace(b){
    return b.slice(0, b.length-1)
}