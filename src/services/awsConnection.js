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
        const Key =`${Date.now()}+${file.name}`;
        const data = {
            ACL: 'public-read',
            Bucket: bucket,
            Key,
            Body: file.base64,
            ContentType: file.type
        };
         return await amazonS3.putObject(data).promise().then((resolve, reject) => {
            if (reject) {
                throw `Falha ao enviar arquivo ${file.name} para ${bucket}`;
            }
            return `https://${bucket}.s3-us-west-1.s3.amazonaws.com/${Key}`;
        }
        ).catch((e) => {
            console.log(e);
        });
    }
}

//configuring the AWS environment

//configuring parameters

module.exports = new AwsConnection();