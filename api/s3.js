require('dotenv').config();
const aws = require('aws-sdk')
const crypto = require('crypto');

const {
    REGION: region,
    AWS_ACCESS_KEY_ID: accessKeyId,
    AWS_SECRET_ACCESS_KEY: secretAccessKey,
    BUCKET_NAME: Bucket
} = process.env;

const s3Object = { region, accessKeyId, secretAccessKey, signatureVersion: 'v4' };
const s3 = new aws.S3(s3Object);

module.exports.generateploadUrl = async function () {
    const rawBytes = await crypto.randomBytes(16);
    const imageName = rawBytes.toString('hex');
    const params = { Bucket, Key: imageName, Expires: 60 };
    const uploadURL = await s3.getSignedUrlPromise('putObject', params);
    return uploadURL;
}