<p align="center">
  <img alt="Logo" src=".github/gobarber-logo.svg" width="200px">
</p>


# Express API for the GoBarber project

> Schedule a haircut the easiest way

<p align="center">
  <a href="https://www.linkedin.com/in/tiago-soriano/" target="_blank" rel="noopener noreferrer">
    <img alt="Author" src="https://img.shields.io/badge/Author-tiago--web-%23FF9000">
  </a>
  
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/tiago-web/GoBarber-api?color=%23FF9000">

  <a href="https://github.com/tiago-web/GoBarber-api/stargazers">
    <img alt="Stars" src="https://img.shields.io/github/stars/tiago-web/GoBarber-api?color=%23FF9000" />
   </a>

  <a href="https://github.com/tiago-web/GoBarber-api/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/tiago-web/GoBarber-api?color=%23FF9000">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/tiago-web/GoBarber-api?color=%23FF9000">
</p>

<p id="insomniaButton" align="center">
  <a href="https://insomnia.rest/run/?label=GoBarber-api&uri=https%3A%2F%2Fraw.githubusercontent.com%2Ftiago-web%2FGobarber-api%2Fmaster%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

# :pushpin: Table of Contents

* [About the project](#haircut-about-the-project)
* [Technologies](#rocket-technologies)
* [Getting Started](#checkered_flag-getting-started)
* [How to contribute](#thinking-how-to-contribute)
* [Found a bug? Missing a specific feature?](#hammer-issues)
* [License](#book-license)



# :haircut: About the project

This api provides everything needed to organize appointments between the barbers and customers.

Customers can choose the best time available to them.

Providers can see all their appointments, manage the times, also see if one client canceled the schedule.

To see the **web client**, click here: [GoBarber Web](https://github.com/tiago-web/GoBarber-web)<br />
To see the **mobile client**, click here: [GoBarber Mobile](https://github.com/tiago-web/GoBarber-mobile)

# :rocket: Technologies

Technologies that I used to develop this API

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://github.com/expressjs/multer)
- [TypeORM](https://typeorm.io/#/)
- [JWT-token](https://jwt.io/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [PostgreSQL](https://www.postgresql.org/)
- [Date-fns](https://date-fns.org/)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/visionmedia/supertest)
- [Husky](https://github.com/typicode/husky)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [Commitizen](https://github.com/commitizen/cz-cli)


# :checkered_flag: Getting Started

Import the `Insomnia.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

> PS: I recommend using docker

**Clone the project and access the folder**

```bash
$ git clone https://github.com/tiago-web/GoBarber-api.git && cd GoBarber-api
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
# The aws variables do not need to be filled for dev environment
$ cp .env.example .env

# Create the instance of postgreSQL using docker
$ docker run --name gobarber-postgres -e POSTGRES_USER=docker \
              -e POSTGRES_DB=gobarber -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres

# Create the instance of mongoDB using docker
$ docker run --name gobarber-mongodb -p 27017:27017 -d -t mongo

# Create the instance of redis using docker
$ docker run --name gobarber-redis -p 6379:6379 -d -t redis:alpine

# Make a copy of 'ormconfig.example.json' to 'ormconfig.json'
# and set the values, if they are not filled,
# to connect with docker database containers
$ cp ormconfig.example.json ormconfig.json

# Once the services are running, run the migrations
$ yarn typeorm migration:run

# To finish, run the api service
$ yarn dev:server

# Well done, project is started!
```

# :thinking: How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork tiago-web/GoBarber-api
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd GoBarber-api

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

# :hammer: Issues

Feel free to file a new issue with a respective title and description on the [GoBarber-api](https://github.com/tiago-web/GoBarber-api/issues) repository. 
If you already found a solution to your problem, **i would appreciate to review your pull request**!


# :book: License

Released in 2020.
This project is under the [MIT license](https://github.com/tiago-web/GoBarber-api/blob/master/LICENSE).

---


Made by Sergio Pereira [LinkedIn](https://www.linkedin.com/in/sergio-hg-pereira) 🚀
