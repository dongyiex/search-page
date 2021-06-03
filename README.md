# AWS Serverless Web App Demo

Click [here](https://master.d2b0dfythxo1sz.amplifyapp.com/) to access the web app.

![CleanShot 2021-06-03 at 16 27 23](https://user-images.githubusercontent.com/17631776/120613600-f7632b80-c488-11eb-9099-2946c0f3cc0b.gif)



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

## Services Introduction
### Understanding DynamoDB:
DynamoDB is a distributed NoSQL, schemaless, key-value storage system. Extremely scalable as the amount of data stored mainly depends on the physical memory of the system. In DynamoDB, you don’t have any such limits as you can scale the system horizontally. You will pay only for the resources you provision.
Though it is schemaless it is still represented as a table. Each table is a collection of items. Value(Attributes) of each item can be a scalar, JSON, set etc. Item size should be less than 400KB (binary, UTF-8). Each item in the table is uniquely identified with a Primary key and is mandatory while creating the table. Primary key can be the same as Partition key or a combination of Partition key and Sort key. If it is a combination of both it is also called Composite primary key.

### Understanding Lambda
Lambda is a serverless compute service. It lets you run code without provisioning or managing servers. You pay only for the compute time you consume. It supports NodeJS, Python, Java, GO etc. Lambda can be triggered from a variety of AWS services. Learn more about Lambda here.
To Every Lambda function handler, 3 objects can passed as argument.
The first argument is the event object, which contains information from the invoker. The invoker passes this information as a JSON-formatted string when it invokes Lambda. When an AWS service invokes your function, the event object structure varies by service.
The second argument is the context object, which contains information about the invocation, function, and execution environment. In the preceding example, the function gets the name of the log stream from the context object and returns it to the invoker.
The third argument, callback, is a function that you can call in non-async functions to send a response to invoker. The callback function takes two arguments: an Error and a response. The response object must be compatible with JSON.stringify. Error should be null for successful response.
In our app, Lambda is used as a mediator for incoming HTTP requests & DynamoDB. Lambda writes, reads and processes data to/from DynamoDB accordingly.

### Understanding API Gateway
Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure API s at any scale.
With a few clicks in the AWS Management Console, you can create REST and WebSocket APIs that act as a front door for applications to access data, business logic, or functionality from your backend services, such as workloads running on EC2, code running on Lambda, any web application, or real-time communication applications.
API Gateway handles all the tasks involved in accepting and processing up to hundreds of thousands of concurrent API calls, including traffic management, authorization and access control, monitoring, and API version management.
In our app, we use API Gateway to invoke different Lambda functions for different API calls.
Understanding Cognito:
Amazon Cognito User Pool makes it easy for developers to add sign-up and sign-in functionality to web and mobile applications. It serves as your own identity provider to maintain a user directory. It supports user registration and sign-in, as well as provisioning identity tokens for signed-in users.
Our Jotter app needs to handle user accounts and authentication in a secure and reliable way. We are going to use Cognito User Pool for it.

### Understanding Amplify
AWS Amplify is a framework provided by AWS to develop applications, with AWS cloud services. Amplify makes the process of stitching cloud services with our application hassle free. Amplify provides different libraries for different apps(iOS, Android, Web, React Native). Amplify javascript library is available as an npm package(aws-amplify). The aws-amplify client library uses a config file to connect AWS services. The services which amplify provides include Database, API, Lambda/serverless, Authentication, Hosting, Storage, Analytics.
Note: One could also use AWS Amplify CLI to provision AWS services. The aws-amplify client library and Amplify CLI are two different things.
Amplify CLI internally uses cloudformation to provision/create, while aws-amplify client library is used to connect to AWS services. Using Amplify CLI is inconvenient as you are not creating services directly from AWS console but by using a CloudFormation stack internally. If successful, it returns a config file with all the metadata of different services provisioned. Instead a simple approach is to create required services from AWS console and update the config file manually and use it with aws-amplify client library.







