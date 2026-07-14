// for Loop

{
    for (let i = 1; i <= 100; i++) {
        console.log("Yug Patel");
    }
}

// Calculate sum of 1 to 15

{
    let sum = 0;
    for (let i = 1; i <= 15; i++) {
        sum = sum + i;
    }

    console.log("sum = ", sum);
}

console.log("===== For loop has ended =====");

// While Loop

{
    let i = 1;
    while (i <= 10) {
        console.log("This is While Loop");
        i++;
    }
}

console.log("===== While loop has ended =====");

// do while Loop

{
    let i = 1;
    do {
        console.log("This is Do-while Loop");
        i++;
    } while (i <= 20);
}

console.log("===== do While loop has ended =====");

// for-of loop
{
    let str = "Javascript";
    let length = 0;

    for (let i of str) {
        console.log("i = ", i);
        length++;
    }
    console.log("String Length = ", length);
}

console.log("===== for-of loop has ended =====");

// for-in loop

{
    let student = {
        name: "Yug Patel",
        age: 20,
        cgpa: 7.6,
        isPass: true,
    };

    for (let i in student) {
        console.log(i, "=", student[i]);
    }
}

console.log("===== for-in loop has ended =====");

// 1. Print Even numbers 1 to 50

console.log("===== 1. Print Even numbers 1 to 50 =====");

{
    for (let i = 0; i <= 50; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

// 2. Game

console.log("===== 2. Game =====");

// {
//     let gameNum = 12;
//     let userNum = prompt("Guess the game number :- ");

//     while (userNum != gameNum) {
//         userNum = prompt("You enteres wrong number. Guess again :- ");
//     }

//     console.log("Congratulations, You entered the right number");

// }

// string 

console.log("===== string =====");

{
    // create string

    let str = "Yug";

    console.log(str);

}

{
    // String length 

    let str1 = "This is a string length."

    console.log(str1.length);

}

{
    // string indices

    let str1 = "This is a string length."

    console.log(str1[10]);
}

// string methods

// str.toUpperCase()

console.log("===== str.toUpperCase() =====");

{
    let up = "yug patel";

    console.log(up.toUpperCase());

}

// str.toLowerCase()

console.log("===== str.toLowerCase() =====");

{
    let lr = "JANVI PATEL";

    console.log(lr.toLowerCase());

}

// str.trim()

console.log("===== str.trim() =====");

{
    let tr = "     Bhavinbhai Patel         ";

    console.log(tr.trim());

}

// str.slice(start, end?)

console.log("===== str.slice(start, end?) =====");

{
    let sl = "0123456789";

    console.log(sl.slice(2, 6));

}

// str1.concat(str2)

console.log("===== str1.concat(str2) =====");

{
    let str1 = "Yug";
    let str2 = " Patel";

    let result = str1.concat(str2)

    console.log(result);

}

// str.replace(search val, new val)

console.log("===== str.replace(search val, new val) =====");

{
    let rep = "hellow";

    console.log(rep.replace("h", "y"));

}

// str.charAt(index)

console.log("===== str.charAt(index) =====");

{
    let ca = "Laxmi";

    console.log(ca.charAt(3));

}


// string practice task

// 1. full name, user name, full name length

console.log("===== Que 1. =====");

{
    let fullName = prompt("enter your fullName without spaces");

    let userName = "@" + fullName + fullName.length;

    console.log(userName);

}
