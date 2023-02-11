# Socialenator-anator

## MERN Demo Project

A basic social media platform project to practice working with React, MongoDB, Node, and Expressjs.

Based on tutorial by [EdRoh](https://github.com/ed-roh)
[YouTube: Build a COMPLETE Fullstack Responsive MERN App with Auth, Likes, Dark Mode | React, MongoDB, MUI](https://www.youtube.com/watch?v=K8YELRmUb5o)

## Project Status

Basic functionality is complete and can be found in the client folder. A TypeScript based version of the Frontend is in progress under ts-client.

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

### Installation:

server: `npm install` then `npm start`
You will need to have set up a [mongodb](https://mongodb.com) account with a user and project there. Credentials for Mongo will go into a .env file in the root of the server folder.

MONGO_URL='<your connection url with username and pw>'
PORT='<3001 unless you change that in the server settings>'
JWT_SECRET='<a secret passphrase>'

client: `npm install` then `npm start`
Client app should be available at [localhost:3000](http://localhost:3000)
