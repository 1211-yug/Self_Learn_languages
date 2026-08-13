// DOM Manipulation

let heading = document.getElementById("heading")

console.log(heading);

let class1 = document.getElementsByClassName("class")

console.log(class1);

let par = document.getElementsByTagName("p")

console.log(par);

// querySelector ma id|class|tag all use kare sakay che 

let firsEl = document.querySelector("p") // return a first element

console.log(firsEl);

let allEl = document.querySelectorAll("p") // return a NodeList

console.log(allEl);

// properties

let div = document.querySelector("div");

console.log(div);

// quetion 

let h2 = document.querySelector("h2");

h2.innerText = h2.innerText + " from Yug patel.";

let divs = document.querySelectorAll(".box");

let idx = 1;
for(div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++;
}

// divs[0].innerText = "new unique  value 1"
// divs[1].innerText = "new unique value 2"
// divs[2].innerText = "new unique value 3"


