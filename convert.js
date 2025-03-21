// // const fs = require("fs");
// // const { marked } = require("marked");

// // const markdown = fs.readFileSync("introduction.md", "utf8");

// // // Convert Markdown to HTML
// // const content = marked(markdown);

// // // HTML template with styles
// // const html = `
// // <!DOCTYPE html>
// // <html lang="en">
// // <head>
// //     <meta charset="UTF-8">
// //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //     <title>Cookbook</title>
// //     <style>
// //         body {
// //             font-family: Arial, sans-serif;
// //             background-image: url('/images/background.jpg');
// //             background-size: cover;
// //             text-align: center;
// //             padding: 20px;
// //         }
// //         .container {
// //             max-width: 800px;
// //             margin: auto;
// //             background: rgba(255, 255, 255, 0.9);
// //             padding: 20px;
// //             border-radius: 10px;
// //         }
// //         .recipe-button {
// //             display: inline-block;
// //             margin: 10px;
// //             padding: 10px 20px;
// //             background: #ff6600;
// //             color: white;
// //             text-decoration: none;
// //             font-weight: bold;
// //             border-radius: 5px;
// //         }
// //         .recipe-button:hover {
// //             background: #e65c00;
// //         }
// //         body img {
// //         width: 500px:
// //         height: 300px;
// //         }
// //     </style>
// // </head>
// // <body>
// //     <div class="container">
// //         <h1>Welcome to the Cookbook</h1>
// //         ${content}

// //         <h2>Recipes</h2>
// //         <a href="deviled-eggs.html" class="recipe-button">Deviled Eggs</a>
// //         <a href="bruschetta.html" class="recipe-button">Bruschetta</a>
// //         <a href="chocolate-mousse.html" class="recipe-button">Chocolate Mousse</a>
// //         <a href="tiramisu.html" class="recipe-button">Tiramisu</a>
// //     </div>
// // </body>
// // </html>
// // `;

// // fs.writeFileSync("introduction.html", html);

// // console.log("Markdown converted to HTML with styling!");

// const fs = require("fs");
// const { marked } = require("marked");

// const markdown = fs.readFileSync("introduction.md", "utf8");

// // Convert Markdown to HTML
// const content = marked(markdown);

// // HTML template with improved styling
// const html = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Cookbook</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             background-image: url('images/background.png');
//             background-size: cover;
//             padding: 20px;
//         }
//         .container {
//             max-width: 1200px;
//             margin: auto;
//             background: rgba(255, 255, 255, 0.9);
//             padding: 20px;
//             border-radius: 10px;
//         }
//         h1 {
//             text-align: center; /* Centering the title */
//             margin-bottom: 20px;
//         }
//         .content {
//             text-align: left;
//             margin-left: 50px; /* Left margin for spacing */
//             margin-right: 50px;
//         }
//         .recipe-button {
//             display: inline-block;
//             margin: 10px;
//             padding: 10px 20px;
//             background: #ff6600;
//             color: white;
//             text-decoration: none;
//             font-weight: bold;
//             border-radius: 5px;
//         }
//         .recipe-button:hover {
//             background: #e65c00;
//         }
//         img {
//             display: block;
//             max-height: 400px; /* Adjusts the image size */
//             width: auto;
//             margin: 10px auto; /* Centers the image */
//             border-radius: 10px;
//         }
//     </style>
// </head>
// <body>
//     <div class="container">
//         <div class="content">
//             ${content}

//             <h2>Recipes</h2>
//             <a href="./appetizers/appetizers.md" class="recipe-button">Deviled Eggs</a>
//             <a href="bruschetta.html" class="recipe-button">Bruschetta</a>
//             <a href="chocolate-mousse.html" class="recipe-button">Chocolate Mousse</a>
//             <a href="tiramisu.html" class="recipe-button">Tiramisu</a>
//         </div>
//     </div>
// </body>
// </html>
// `;

// // Write the output HTML file
// fs.writeFileSync("introduction.html", html);

const fs = require("fs");
const { marked } = require("marked");
const path = require("path");

// List of Markdown files and their corresponding output paths
const files = [
  { input: "introduction.md", output: "introduction.html", depth: 0 },
  {
    input: "main_courses/main_courses.md",
    output: "main_courses.html",
    depth: 0,
  },
  { input: "appetizers/appetizers.md", output: "appetizers.html", depth: 0 },
  { input: "desserts/desserts.md", output: "desserts.html", depth: 0 },
];

// Function to generate correct relative paths based on depth
function getRelativePath(depth) {
  return "images/background.png"; // Since everything is now in the same folder
}

// Function to convert Markdown to HTML
function convertMarkdownToHTML(inputPath, outputPath) {
  try {
    const markdown = fs.readFileSync(inputPath, "utf8");
    const content = marked(markdown);

    // Adjust background image path dynamically
    const backgroundPath = getRelativePath();

    // HTML template with styles
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cookbook</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-image: url('${backgroundPath}');
                    background-size: cover;
                    padding: 20px;
                }
                .container {
                    max-width: 800px;
                    margin: auto;
                    background: rgba(255, 255, 255, 0.9);
                    padding: 20px;
                    border-radius: 10px;
                    text-align: left;
                }
                h1 {
                    text-align: center;
                }
                .recipe-button {
                    display: inline-block;
                    margin: 10px;
                    padding: 10px 20px;
                    background: #ff6600;
                    color: white;
                    text-decoration: none;
                    font-weight: bold;
                    border-radius: 5px;
                }
                .recipe-button:hover {
                    background: #e65c00;
                }
                img {
                    max-width: 100%;
                    height: auto;
                    display: block;
                    margin: 10px 0;
                }
            </style>
        </head>
        <body>
            <div class="container">
                ${content}
                <h2>Recipes</h2>
                <a href="main_courses.html" class="recipe-button">Main Courses</a>
                <a href="appetizers.html" class="recipe-button">Appetizers</a>
                <a href="desserts.html" class="recipe-button">Desserts</a>
            </div>
        </body>
        </html>
        `;

    // Write HTML file in the root directory
    fs.writeFileSync(outputPath, html);
    console.log(`Converted ${inputPath} to ${outputPath}`);
  } catch (error) {
    console.error(`Error processing ${inputPath}: ${error.message}`);
  }
}

// Convert all Markdown files
files.forEach((file) => convertMarkdownToHTML(file.input, file.output));
