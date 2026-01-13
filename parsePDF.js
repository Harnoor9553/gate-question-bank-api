const fs = require('fs');
const PDFParser = require('pdf2json');

function parsePDF(filePath) {
  const pdfParser = new PDFParser();
  
  pdfParser.on('pdfParser_dataError', errData => {
    console.error('Error:', errData.parserError);
  });
  
  pdfParser.on('pdfParser_dataReady', pdfData => {
    console.log('PDF loaded successfully');
    console.log('Number of pages:', pdfData.Pages.length);
    
    // Try to extract text from first page
    if (pdfData.Pages.length > 0) {
      const firstPage = pdfData.Pages[0];
      console.log('First page data:', JSON.stringify(firstPage, null, 2).substring(0, 1000));
    }
    
    const text = pdfParser.getRawTextContent();
    console.log('Text length:', text.length);
    console.log('Text:', text.substring(0, 500));
  });
  
  pdfParser.loadPDF(filePath);
}


// Test with one of your PDFs
parsePDF('./papers/AG24S5.pdf');