// //task 1: Create and Use an Object
// let book= {
//     title: "The Water Dancer",
//     author: "Ta-Nehisi Coates",
//     pages: 416,
//     isRead: false
// }

// console.log("Using Dot Notation:");
// console.log("title:", book.title);
// console.log("author:", book.author);
// console.log("pages:", book.pages);
// console.log("isRead:", book.isRead);

// console.log("\nUsing Dot Notation:");
// console.log("title:", book["title"]);
// console.log("author:", book["author"]);
// console.log("pages:", book["pages"]);
// console.log("isRead:", book["isRead"]);

// book.isRead= true;

// book.genre= "Novel";

// console.log("Updated book object", book);


// //task 2:Create and modify an array of objects

// let movies = [
//     { title: "Inception", director: "Christopher Nolan", year: 2010 },
//     { title: "Interstellar", director: "Christopher Nolan", year: 2014 },
//     { title: "The Matrix", director: "Lana & Lilly Wachowski", year: 1999 }
// ];

// console.log("The title of the second movie:", movies[1].title);

// movies.push({ title: "Avatar", director: "James Cameron", year: 2009 });

// movies[0].year = 2023;

// console.log("Updated Movies Array:", movies);


// //task 3: Combine objects and arrays

// let student = {
//     name: "Niña",
//     age: 22,
//     subjects: ["Math", "Science", "History"]
// };

// console.log("First subject:", student.subjects[0]);

// student.subjects.push("English");

// console.log("Updated Student Object:", student);


//task 4: Challenge task

let recipe = {
    name: "Pasta Salad",
    ingredients: [
        { name: "Pasta", quantity: "2 cups" },
        { name: "Tomatoes", quantity: "1 cup" },
        { name: "Olive Oil", quantity: "2 tbsp" }
    ],
    isVegetarian: true
};

recipe.ingredients.push({ name: "Basil", quantity: "1/4 cup" });

console.log("Second ingredient:", recipe.ingredients[1].name);

console.log("Updated Recipe Object:", recipe);

