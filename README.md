# gato365-social-network-api

The purpose of this project is to create a social network API for a social media app called Gato365. This API will allow users to share their thoughts, react to friends’ thoughts, and create a friend list.


## Table of Contents
A) [Installation](#installation)
B) [Usage](#usage)
C) [Technologies](#technologies)
D) [License](#license)
E) [Contributing](#contributing)
F) [Tests](#tests)



## A) Installation
To install necessary dependencies, run the following command:
```
npm i
```


## B) Usage
This project is used to create a social network API for a social media app called Gato365. This API will allow users to share their thoughts, react to friends’ thoughts, and create a friend list. Also, allows users to react to friends’ thoughts and create a friend list.

[Video Demonstration](https://youtu.be/_7YrFpMd3ok)


## C) Technologies
This project was created using the following technologies:

* JavaScript
* Node.js
* Express.js
* MongoDB
* Mongoose
* NodeMon


## D) License
This project is licensed under the MIT license.


## E) Contributing
NA 

## F) Testing


### Users

* GET all users
* GET a single user by its _id and populated thought and friend data
* POST a new user
* PUT to update a user by its _id
* DELETE to remove user by its _id and associated thoughts

### Add Friend

* POST to add a new friend to a user’s friend list
* Delete to remove a friend from a user’s friend list

### Thoughts

* GET all thoughts
* GET a single thought by its _id
* POST to create a new thought (don’t forget to push the created thought’s _id to the associated user’s thoughts array field)
* PUT to update a thought by its _id
* DELETE to remove a thought by its _id

### Reactions

* POST to create a reaction stored in a single thought’s reactions array field
* DELETE to pull and remove a reaction by the reaction’s reactionId value



