let fs = require('fs'),
    PDFParser = require("pdf2json");

let pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFileSync("G:/js_projects/pdf-reader/output/test2.json", JSON.stringify(pdfData));
});

pdfParser.loadPDF("G:/js_projects/pdf-reader/input/test2.pdf");