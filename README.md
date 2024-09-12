# ABN Assignment Solution, by Thomas van Vessem

Welcome to my solution for the ABN assignment!

Summary of my solution:

- I have tried to automate as much as I could do within the time frame of approx. 7 hours.
- I have created page objects to represent an element repository per page (found in `./test/support/page-objects`).
- I have created so-called 'drivers' as a separate API on top of Playwright to make Playwright code more re-usable and
  maintainable (found in `./test/support/drivers`)
- Two test levels are defined: flows and component tests, both can be found inside the `./test/tests` directory.
- Unfortunately, I did not have enough time to comment all the code in the drivers and page objects classes. Note that
  I'm aware that in production code, this always should be the case.

Please follow the instructions below to setup the project and run the automated tests.

# Instructions


- Open a terminal on the root of this project
- Run `npm i` to install the project dependencies.
- Run `npm start` to start the http-server to serve the given single-page application, found in the `./src` directory.
   - The server is run on port 8080. If this port is not available run `npx http-server src --port [port_number]` to run the server on a different port. Note that in that case, also change the baseUrl to the correct port, found in `./playwright.config.ts` 
- Run `npm test` to run all Playwright tests in headless mode or run `npm test:ui` to open the Playwright test runner to
  run Playwright tests via the UI. After execution, you should that 39 tests have passed.

- Optional: turn on Prettier configuration in your IDE to turn on code formatting if you wish to edit tests.


