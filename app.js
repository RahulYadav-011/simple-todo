let btn = document.querySelector("button")
let inp = document.querySelector("input")
let ul = document.querySelector("ul")

btn.addEventListener("click",function(){
    let item = document.createElement("li")
     item.classList.add("list")
   
    item.innerText= inp.value
   
    let del = document.createElement("button")
    del.innerText= "Delete"
    item.appendChild(del)
   del.classList.add("DELETE")
   // console.log(inp.value)

   ul.appendChild(item);
  
   inp.value= ""
})


 ul.addEventListener("click",function (event) {

     if (event.target.nodeName == "BUTTON"){
  let para = event.target.parentElement;
  para.remove();
     }else{
console.log("button was not clicked")
     }
 })