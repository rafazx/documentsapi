const fs = require('fs');
const pdf = require('pdf-parse');

class GeneratePdf {
    constructor(name, fileBase64) {
        this.fileName = __dirname + '/' +  name;
        this.fileBase64 = fileBase64.split(';base64,').pop()
    }

    async generate() {
        let pdfText = '';
        fs.writeFileSync(this.fileName, this.fileBase64, {encoding: 'base64'});
        const dataBuffer = fs.readFileSync(this.fileName);
        await pdf(dataBuffer)
        .then(function(data) {
            // number of pages
            console.log('aaaaa')
            console.log(data.numpages);
            // number of rendered pages
            console.log(data.numrender);
            // PDF info
            console.log(data.info);
            // PDF metadata
            console.log(data.metadata); 
            // PDF.js version
            // check https://mozilla.github.io/pdf.js/getting_started/
            console.log(data.version);
            // PDF text
            console.log(data.text); 
            pdfText = data.text;
        });
        fs.unlinkSync(this.fileName);
        return pdfText;
    }

}

module.exports = GeneratePdf;