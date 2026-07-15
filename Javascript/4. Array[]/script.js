
// Array

{
    let marks = [97, 49, 95, 39, 69, 28];

    marks[1] = 83; // change the array value

    console.log(marks);
    console.log(marks.length);
}

{
    let str = ["yug", "bhavin", "janvi", "laxmi"];

    str[0] = "anjana"

    console.log(str);
    console.log(str.length);
}

// looping over an array

{
    let movies = ["Animal", "KGF", "Dhurandhar", "Fighter", "Pathan"];

    // for loop

    for (let i = 0; i <= movies.length; i++) {
        console.log(movies[i]);
    }

    // for of loop

    for (let movie of movies) {
        console.log(movie.toUpperCase());

    }
}

// Que 1.

console.log("===== 1 =====");

{
    let marks = [89, 91, 74, 67, 56, 89];

    let sum = 0;

    for (let val of marks) {
        sum += val;
    }

    let avg = sum / marks.length;

    console.log(`avg marks of the class = `, avg);
}

// Que 2.

console.log("===== 2 =====");

{
    let items = [210, 649, 834, 964, 230];
    let i = 0;

    for (let val of items) {
        console.log(`Value at index ${i} = ${val}`);
        let offer = val / 10;
        items[i] = items[i] - offer;
        console.log(`Value after offer = ${items[i]}`);
        i++;
    }
}

// array methods

// push()
// add to end
console.log("===== push() =====");

{
    let fruits = ["apple", "litchi", "mango"];

    console.log(fruits);
    console.log(fruits.push("banana"));
    console.log(fruits);
}


// pop() 
// delete from end & return
console.log("===== push() =====");

{
    let foods = ["Pizza", "Burger", "Chips", "Frenki"];

    console.log(foods);
    console.log(foods.pop());
    console.log(foods);
}

// toString()
// converts array to string
console.log("===== toString() =====");

{
    let city = ["Surat", "Rajkot", "Ahemdabad", "Bharuch"]

    console.log(city);
    console.log(city.toString());
    console.log(city);
}


