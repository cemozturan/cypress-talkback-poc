# cypress-talkback-poc

Automated Cypress tests using mock talkback servers instead of hitting real endpoints.

This is a super basic React app that has a single button to get some users from a public API endpoint (https://jsonplaceholder.typicode.com/users).

The idea here is to show how to set up Cypress tests with [talkback](https://github.com/ijpiantanida/talkback) so that any calls to extrenal services are mocked. This allows us to run the Cypress tests successfully even if the external dependencies go down. Also, since the responses from the mocked services are played instantly, the tests simply run faster.

### How to run locally

First of all, let's see what the real data looks like. Execute:

```
npm start
```

This will start the app and take you to the main page, where you will see a "Get users" button. Clicking the button will make a request to the public API mentioned above and get you some users.

Now, let's run Cypress tests. You can execute one of the following two commands:

```
npm run cypress:mock-servers-open
npm run cypress:mock-servers-run
```

The first one will start a Cypress app, and let you run the test when you want, and give you a chance to see it in action in a web browser.

The second one will run the tests behind the scenes, and you'll get your output in your terminal.

If you try to run one of the following two commands, your tests will fail:

```
npm run cypress:open
npm run cypress:run
```

The reason is that the tests are expecting the data that comes from the mocked talkback servers (which are stored inside the tapes we have in [cypress/fixtures/tapes](cypress/fixtures/tapes)). However, these commands execute the tests without mocking the external dependencies.


### How do we mock the external dependencies

We start the talkback servers in [cypress/scripts/mock-server.js](cypress/scripts/mock-server.js). You can read more about talkback online, but as a summary, I can say that it basically records the requests to/responses from real endpoints, and just replays them when we run the tests. These are recorded in [cypress/fixtures/tapes](cypress/fixtures/tapes).

Note that for the talkback servers to take effect, our code has to hit the talkback server that we configure. This means, any request we normally make to https://jsonplaceholder.typicode.com has to be made to http://localhost:5544 (you can configure a different port number, I chose 5544). This is why I have an environment variable (REACT_APP_API_HOST) which I set to http://localhost:5544 when running the cypress scripts (see [package.json](package.json))

Bye now.
