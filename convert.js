const fs = require("fs");
const { marked } = require("marked");

fs.readFile("introduction.md", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Converted Markdown</title>
</head>
<body>
  ${marked.parse(data)}
</body>
</html>`;

  fs.writeFile("output.html", htmlContent, (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("Markdown successfully converted to HTML!");
    }
  });
});
