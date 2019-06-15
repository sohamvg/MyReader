# MyReader
repo for pdf-reader

## Idea
A utility that will recognise any references made inside a PDF to another part of the file and will show a preview of the referred content when the mouse pointer hovers over the text which made the reference.
## Frameworks
- PDF.js
- pdf2json
- Chrome Extension Developer Tools
## Workflow
The User selects the text which he/she wants to refer to. An automatic tooltip appears which asks the user if it wants to get the definition or not.
A floating window will appear which shows all the portions of the matching text/ the relevant text. In case not able to find the relevant text, show all the matches with an arrow above to scroll through all the matches  (can be done with chrome extension tool)
Showing the relevant part of the pdf can be achieved by using pdf2json. After parsing, we get text blocks which can then be used to get the y and the x coordinates and can be shown using a canvas on the window,  
## Problem faced
Getting the relevant text.

## Current Status & Usage instructions
- run ```npm install``` to install the dependencies.
- pdftojson.js can be used to convert pdfs to json (edit ```loadPDF``` & ```writeFileSync``` in the file to get json file).
- search_pdf.js takes 2 arguments- data (json file) and search text and returns the text object (https://github.com/modesty/pdf2json#page-object-reference) containing the search item.
