# SERVERLESS PROJECT

## What's used:
- [AWS credentials](https://console.aws.amazon.com/iam/home?region=eu-south-1#/users)
- [NPM](https://www.npmjs.com/)
- [NodeJS](https://nodejs.org/)
- [serverless](https://www.serverless.com/)

## Installation
#### API
- Copy the .env_sample file (inside API folder) and rename to .env. Include your aws credentials and bucket information
- Open the Command Prompt on API directory and run
```sh
npm install
npm start
```
#### Serverless
In order to set the serverless, run:
```sh
serverless config credentials -o --provider aws --key=<AWS_KEY> --secret <AWS_SECRET_KEY>
```
In order to deploy the serverless function on AWS, run:
```sh
npm run deploy
```

## Usage
To test the application, after running the API and deploying the serverless, you can go to http://localhost:8080 and upload the image.

### AWS Settings
In order to get the amazon bucket set, don't forget to include the bucket policy and Cross-origin resource sharing.
Have a look at these examples:
#### Bucket policy
```json
{
    "Version": "2012-10-17",
    "Id": "Policy1625566935522",
    "Statement": [
        {
            "Sid": "Stmt1625566932039",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::<BUCKET NAME>/*"
        }
    ]
}
```

#### Cross-origin resource sharing (CORS)
```json
[
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "PUT",
            "HEAD",
            "GET"
        ],
        "AllowedOrigins": [
            "*"
        ],
        "ExposeHeaders": []
    }
]
```


### BEER-WARE LICENSE
  > `pedro.ufsj@gmail.com` wrote this file. As long as you retain this notice you
  can do whatever you want with this stuff. If we meet some day, and you think
  this stuff is worth it, you can buy me a beer in return.   `Pedro H. da Silva.`
 