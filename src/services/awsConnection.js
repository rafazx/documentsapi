const AWS = require('aws-sdk');
const fs = require('fs');

class AwsConnection{
    constructor(){
        AWS.config.update({
            accessKeyId: "AKIAUI5ORBK77S5OD674",
            secretAccessKey: "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"
          });
    }

     async upload(file) {
        const bucket = 'documents-pdf';
        var amazonS3 = new AWS.S3();
        const Key =`${Date.now()}`;
        const buffer = new Buffer(file.base64.split(';base64,').pop(),'base64')
        const data = {
            ACL: 'public-read',
            Bucket: bucket,
            Key,
            Body: buffer,
            ContentType: file.type
        };
        return await amazonS3.putObject(data).promise()
         .then((resolve ,reject) => {
            if (reject) {
                throw `Falha ao enviar arquivo ${message._id}.${ext} para ${bucket}`;   
            }
            return `https://${bucket}.s3.us-east-2.amazonaws.com/${Key}`;
        }
        ).catch((error) => {
            throw new Error(error.message);
        });
    
    }
}

//configuring the AWS environment

//configuring parameters

module.exports = new AwsConnection();