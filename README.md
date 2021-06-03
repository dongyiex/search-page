# AWS Serverless Web App Demo

Click [here](https://master.d2b0dfythxo1sz.amplifyapp.com/) to access the web app.

![image](https://user-images.githubusercontent.com/17631776/120613346-bd922500-c488-11eb-941f-d02e3027e49a.png)


## Application Architecture

The application architecture uses AWS Lambda, Amazon API Gateway, Amazon DynamoDB, and AWS Amplify Console. Amplify Console provides continuous deployment and hosting of the static web resources including HTML, CSS, JavaScript, and image files which are loaded in the user's browser. JavaScript executed in the browser sends and receives data from a public backend API built using Lambda and API Gateway. Amazon Cognito provides user management and authentication functions to secure the backend API. Finally, DynamoDB provides a persistence layer where data can be stored by the API's Lambda function.

![image](https://user-images.githubusercontent.com/17631776/120604245-6f2c5880-c47f-11eb-9d63-c6a197946c39.png)


## Description

### Frontend
It leverages AWS Amplify to host the static resources for the web application with continuous deployment built-in. The Amplify Console provides a git-based workflow for continuous deployment & hosting of fullstack web apps. In subsequent modules you'll add dynamic functionality to these pages using JavaScript to call remote RESTful APIs built with AWS Lambda and Amazon API Gateway.

The fronted of this project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

![image](https://user-images.githubusercontent.com/17631776/120603547-bebe5480-c47e-11eb-9c4a-f085a0aa242f.png)

### Backend
AWS Lambda and Amazon DynamoDB are used to build a backend process for handling requests for your web application. The browser application that we deployed allows users to request. In order to fulfill those requests, the JavaScript running in the browser will need to invoke a service running in the cloud. The function is invoked from the browser using Amazon API Gateway, the API gateway will trigger functions to handle those requests.

![image](https://user-images.githubusercontent.com/17631776/120606053-5755d400-c481-11eb-893a-f59be522d44d.png)










