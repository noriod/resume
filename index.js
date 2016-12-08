var markdownpdf = require("markdown-pdf");
var fs = require("fs");

var basePath = "./";
var markdownFileName = `${basePath}README.md`;
var pdfFileName = `${basePath}resume.pdf`;

fs.createReadStream(markdownFileName)
  .pipe(
    markdownpdf(
      {
        "paperBorder": "1cm"
      }
    )
  )
  .pipe(fs.createWriteStream(pdfFileName));