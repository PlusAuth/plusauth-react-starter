# Plusauth React Starter Project

This is a very simple React project demonstrating basic authentication flows such as register, login and logout.
To keep things simple we bootstrapped the project with
[create-react-app](https://create-react-app.dev/) and used
[@plusauth/plusauth-oidc-client-js](https://github.com/PlusAuth/plusauth-oidc-client-js) for authentication.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [License](#license)

## Prerequisites

Before running the project, you must first follow these steps:

1. Create a Plusauth account and a tenant at [PlusAuth Dashboard](https://dashboard.plusauth.com)
2. Navigate to `Clients` tab and create a client of type `Single Page Application`.
3. Go to details page of the client that you've just created and set the following fields as:

- Redirect Uris: `http://localhost:3000/callback`, `http://localhost:3000/silent-renew.html`
- Post Logout Redirect Uris: `http://localhost:3000`

Write down your Client Id, it will be required in application's configuration.

## Getting Started

First we need to supply required configuration values for the application. Rename `.env.example` file as `.env`.

Then configure the `.env` file using your Client Id and your Plusauth tenant name.

Finally start the server:

```shell
npm start
# or with yarn
yarn start
```

The example is hosted at http://localhost:3000/

> If you are serving your application in a different port from the default one which is `3000`, 
> make sure you have updated your Client's configuration mentioned in the [Prerequisites](#prerequisites) section and [auth.js](src/auth.js) accordingly.

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
