# Social Network API

![GitHub last commit](https://img.shields.io/github/last-commit/moe-j22/social-network-api)
![GitHub license](https://img.shields.io/github/license/moe-j22/social-network-api)

## Description

This repository contains the code for a simple Social Network API built using Express.js, MongoDB, and Mongoose. The API allows users to share thoughts, react to thoughts, and manage their friend list.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/moe-j22/social-network-api.git

2. Install dependencies:
```npm install
```
3. Set up your MongoDB database.

## Usage

1. Run the application:

    ```bash
    npm start
    ```

2. Test API routes using a tool like [Insomnia](https://insomnia.rest/).

## API Routes

- **/api/users**
  - `GET /users`: Get all users.
  - `GET /users/:userId`: Get a single user by ID.
  - `POST /users`: Create a new user.
  - `PUT /users/:userId`: Update a user by ID.
  - `DELETE /users/:userId`: Delete a user by ID.

- **/api/users/:userId/friends/:friendId**
  - `POST`: Add a new friend to a user's friend list.
  - `DELETE`: Remove a friend from a user's friend list.

- **/api/thoughts**
  - `GET`: Get all thoughts.
  - `GET /thoughts/:thoughtId`: Get a single thought by ID.
  - `POST /thoughts`: Create a new thought.
  - `PUT /thoughts/:thoughtId`: Update a thought by ID.
  - `DELETE /thoughts/:thoughtId`: Delete a thought by ID.

- **/api/thoughts/:thoughtId/reactions**
  - `POST`: Create a reaction for a thought.
  - `DELETE /reactions/:reactionId`: Remove a reaction by ID.


## License

This project is licensed under the [MIT License](LICENSE).
