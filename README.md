# wiredInCodeChallenge1
wiredIn Code Challenge No1

## Features
- Any User can sign up
- Any User can sign in
- Logged-in User can send a message
- Logged-in User can delete a message he/she has sent
- Any User can view all messages
- Any User can view a specified message

## Getting Started
To get started with this app you have to follow all instruction below carefully and implement.

## Prerequisites
First all of, Install the softwares on your local machine
- Install `NodeJS` [NodeJs](https://nodejs.org/en/download/)
- Install `Git` [Git](https://git-scm.com/)

## Installing the App
Make sure that you have cloned this Repo to your local machine
- By running `git clone https://github.com/jajajaden01/wiredInCodeChallenge1.git`
- or download the Ziped folder on `GitLab`
- Then after run `cd wiredInCodeChallenge1` to open the folder or simplly double on the downloaded folder
- To install all dependencies locally (on Backend), open `nodejsBackend` folrder and run this command `npm i` or `npm install` in terminal
- To install all dependencies locally (on Frontend), open `reactjs-frontend` folrder and run this command `yarn install` or `npm i` or `npm install` in terminal

### Scripts to use on Backend
- run `npm run dev` to start development

### Scripts to use on Frontend
- run `yarn start` or `npm run start` to start development

## API endpoints

**API endpoints with no authentication**
- POST `api/v1/auth/signup` User Sign up

**Body:** {
	"firstName": "xxxxxx",
	"lastName": "xxxxxx",
	"email": "xxxxxx",
	"userType": "xxxxxx",
	"phone": "xxxxxx",
	"username": "xxxxxx",
	"password": "xxxxxx"
}

- POST `api/v1/auth/signin` User Sign in

**Body:** {
	"email": "xxxxxx",
	"password": "xxxxxx"
}


- GET `api/v1/messages` View all messages
- GET `api/v1/messages/:messageId` Get a specific message


**API endpoints with authentication**

- POST `api/v1/messages` Create a message
**Header:** "token": "xxxxxx"

**Body:** {
	"to": "xxxxxx",
	"subject": "xxxxxx",
	"body": "xxxxxx"
}

- DELETE `api/v1/messages/:messageId` Delete a message

**Header:** "token": "xxxxxx"


## UI Pages

### UI pages avaible for any user
- Home page for sign-up or sign-in [http://localhost:3000](http://localhost:3000)
- Sign-up or sign-up [http://localhost:3000/register](http://localhost:3000/register)
- List all messages [http://localhost:3000/view-messages](http://localhost:3000/view-messages)


## Tools Used

### Back End
* Node JS
* Express (Framework)

### Front End
* Reactjs (HTML, CSS, Javascript)

## Author
- SHYAKA Jasmin <jajajaden01@gmail.com>
---

## Copyright
Copyright (c) Jasmin SHYAKA, Software Engineer