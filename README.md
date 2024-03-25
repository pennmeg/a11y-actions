# A11y-Actions

## Goal
- Create a workflow on GitHub Actions
- Use the Deque Axe DevTools Linter to test whether code is/not accessible

## How It Works

Upon creating of a new PR, the linter runs checking for any issues. 

This only relates to files that had committed changes. Therefore previous issues, in untouched files, won't be tested but previous issues in the same file will be found/caught.

![Screenshot of the GitHub Action for Accessibility Linter running](https://github.com/pennmeg/a11y-actions/assets/28637810/14e3beaf-a67c-42b7-a5fd-a72d2a0bdd68)

### Failures

[TO DO: What does a failure look like?]

### False Positives

[TO DO: Things that should fail according to their docs but don't]
[TO DO: Things that is doesn't check for that then definitely require manual or additional testing]

### Using VS Code

If you're using VS Code, Deque has a free extension for Axe Accessibility Linter that can be used to help view possible failures or accessibility feedback prior to pushing up a PR. This uses similar rules as the Axe DevTools Linter.

## Created using Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
