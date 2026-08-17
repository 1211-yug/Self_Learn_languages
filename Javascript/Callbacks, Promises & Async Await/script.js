// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

// callback hell
// getData(1, () => {
//     console.log("Getting data 2.....");
//     getData(2, () => {
//         console.log("Getting data 3.....");
//         getData(3, () => {
//             console.log("Getting data 4.....");
//             getData(4)
//         });
//     });
// });

// let promise = new Promise((reslove, reject) => {
//     reject("Some error occured");
// })

// function getData(dataId, getNextData) {
//     return new Promise((reslove, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             reslove("Success");
//             reject("Error");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 2000);
//     });
// }

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a Promise");
//         resolve("Success");
//         reject("Error");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("Peomise fulfilled", res);
// });

// promise.catch((err) => {
//     console.log("Rejected", err);
// });

//
// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     })
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     })
// }

// console.log("fetching data1.......");

// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log("fetching data2.......");
//     let p2 = asyncFunc2();
//     p2.then((res) => { });
// });

//
// Async-await
function api(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        },2000);
    });
}

async function getWeatherData() {
    console.log("getting data1....");
    await api(1);
    console.log("getting data2....");
    await api(2);
    console.log("getting data3....");
    await api(3);
    console.log("getting data4....");
    await api(4);
    console.log("getting data5....");
    await api(5);
}

getWeatherData();