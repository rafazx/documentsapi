const fs = require('fs');
const pdf = require('pdf-parse');

class Generator { 
    async createFile(base64, fileName) {
        //var bitmap = new Buffer(base64, 'base64');
        //fs.writeFileSync(fileName, bitmap);
        const dataBuffer = fs.readFileSync(__dirname + '/' + fileName);
         
    pdf(dataBuffer)
    Promise.resolve(dataBuffer)
    .then(function(data) {
        // number of pages
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
            
    });
        }    
}

module.exports = new Generator();