# TrApp

TrApp tracks your applications to developer jobs, allowing you to focus on the job search.

### Live Demo: https://trapp-frontend.jonespi.now.sh

### Repository: https://github.com/jonespi/trapp-frontend

![Add Job Demo](https://github.com/cohencodes/trapp-frontend/blob/master/src/assets/landing.gif?raw=true)

![Dashboard Screenshot](https://github.com/cohencodes/trapp-frontend/blob/master/src/assets/trapp.png?raw=true)

## Tech Stack

- Frontend

  - [React](https://github.com/facebook/react)
  - [React Hooks](https://github.com/streamich/react-use)
  - [Context API](https://github.com/wesbos/React-Context)
  - [Vanilla CSS](https://vanillaframework.io/)
  - [FontAwesome Library](https://fontawesome.com/)
  - [Axios](https://github.com/axios/axios)

- Backend
  - [Node](https://github.com/nodejs/node)
  - [Express](https://github.com/expressjs/express)
  - [MongoDB](https://github.com/mongodb/mongo)
  - [Mongoose](https://github.com/Automattic/mongoose)
  - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
  - [Authentication: JSONWebTokens](https://jwt.io/)
  - [Heroku](https://devcenter.heroku.com)
  - [YouTube API](https://developers.google.com/youtube/v3/)
  - [Clearbit API](https://clearbit.com/docs)

[Server repo](https://github.com/cohencodes/trapp-backend)

## API

```
/api
.
├── /auth
│   └── POST
│       └── /auth
├── /jobs
│   └── GET
│       ├── /
│       └── /:jobId
│   └── POST
│       └── /newjob
│   └── PATCH
|       └── /:_id
│   └── DELETE
|       └── /:_id
├── /todos
│   └── GET
│       ├── /:job_id
│       └── /get_todo/:_id
│   └── POST
│       └── /add_todo
│   └── PATCH
|       └── /update_todo
│   └── DELETE
|       └── /delete_todo/:_id
├── /users
│   └── POST
│       └── /signup
```

`POST /auth` - authenticates login with JSONWebToken

`GET /jobs` - returns an array of jobs added by the user by their id

`GET /jobs/:jobId` - returns a specific job by it's id

`POST /jobs/newjob` - adds a new job for that user to the database

`PATCH /jobs/:_id` - edits a job at the id with changes

`DELETE /jobs/:_id` - deletes a job in the database by the id

`GET /todos/:job_id` - gets all todos associated with the specific job

`GET /todos/get_todo/:_id` - gets a specific todo by it's id

`POST /todos/add_todo` - adds a todo and is directly related to a job_id

`PATCH /todos/update_todo` - updates a todo, mostly to update status as complete

`DELETE /todos/delete_todo/:_id` - deletes a todo by it's id

`POST /users/signup` - registers a new user

## Team

- Project Manager [@cohencodes](https://github.com/cohencodes)
- QA Lead [@jonespi](https://github.com/jonespi)
- Design Lead [@anyasnow](https://github.com/anyasnow)
