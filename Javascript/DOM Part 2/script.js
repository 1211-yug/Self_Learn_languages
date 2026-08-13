// let para = document.querySelector("p")
// console.log(para);
// console.log(para.getAttribute("class"));
// console.log(para.setAttribute("class","newClass"));

// para.style.backgroundColor = "yellow";
// para.style.color = "red";
// para.style.fontSize = "20px";
// para.style.padding = "20px";
// para.style.textAlign = "center"

// let div = document.querySelector("div");
// console.log(div);

// div.style.backgroundColor = "skyblue"
// div.style.padding = "20px";
// div.style.textAlign = "center"

// let newBtn = document.createElement("Button");
// newBtn.innerText="click me!";
// console.log(newBtn);

// div.append(newBtn); // End ma div create kare che
// div.prepend(newBtn);  // Start ma div create kare che
// div.before(newBtn);  // Start ma div create kare che
// div.after(newBtn);  // end ma div create kare che

// para.remove();

// question ans

// 1. question 
let newBtn = document.createElement("Button");
newBtn.innerText="click me!";

newBtn.style.color= "white";
newBtn.style.backgroundColor= "red";

document.querySelector("body").prepend(newBtn);

// 2. question 
let myclass = document.querySelector(".myclass");
myclass.classList.add("newclass");


// self learning
let li = document.createElement("li");
li.innerText = "Apple";

let list = document.getElementById("list");

list.appendChild(li);

let box = document.getElementById("box");
let item = document.getElementById("item2");

box.removeChild(item);
