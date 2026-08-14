// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 12;
//     a++;
//     console.log(a);
// }

// btn1.addEventListener("click", () => {
//     console.log("Button was clicked - h1");
// })

// btn1.addEventListener("click", () => {
//     console.log("Button was clicked - h2");
// })

// btn1.addEventListener("click", () => {
//     console.log("Button was clicked - h3");
// })

// const h4 = () => {
//     console.log("button was clicked - h4");
// }
// btn1.addEventListener("click",h4);

// btn1.addEventListener("click", () => {
//     console.log("Button was clicked - h5");
// })

// btn1.removeEventListener("click",h4);


// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("1");

// }

/* que-ans */

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
})
