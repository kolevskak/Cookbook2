const fs = require("fs");
const marked = require("marked");

// Read the Markdown file
fs.readFile("input.md", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // Convert Markdown to HTML
  const htmlContent = marked.parse(data);

  // Save it as an HTML file
  fs.writeFile("output.html", htmlContent, (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("Markdown successfully converted to HTML!");
    }
  });
});
