const res=document.getElementById('result');
const btn=document.getElementById('btn');
const input=document.getElementById('input');
let items=[];
window.onload=()=>{
    //get data from local storage
    items=JSON.parse(localStorage.getItem('list-items')) || [];
    items.forEach(item=>addresult(item));
}
btn.addEventListener('click',() =>{
    items.push(input.value);
    //set data into local storage
    localStorage.setItem('list-items',JSON.stringify(items));
    console.log(items)
   addresult(input.value);
   input.value='';
});
function addresult(val){
let para=document.createElement('p');
para.innerHTML=val;
res.appendChild(para);
para.addEventListener('click',()=>{
para.style.textDecoration='line-through';
removeEventListener(val);
})

para.addEventListener('dblclick',()=>{
    res.removeChild(para);
    removeEventListener(val);
})
}
function remove(val){
    let index=items.indexOf(val);
    items.splice(index,1);
    localStorage.setItem('list-items',JSON.stringify(items));
}