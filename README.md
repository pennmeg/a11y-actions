# A11y-Actions

## Goal
- Create a workflow on GitHub Actions
- Use the Deque Axe DevTools Linter to test whether code is/not accessible

## How It Works

Upon creating of a new PR, the linter runs checking for any issues. 

This only relates to files that had committed changes. Therefore previous issues, in untouched files, won't be tested but previous issues in the same file will be found/caught.

![Screenshot of the GitHub Action for Accessibility Linter running](https://github.com/pennmeg/a11y-actions/assets/28637810/14e3beaf-a67c-42b7-a5fd-a72d2a0bdd68)

### Failures

![Screen Shot 2024-03-25 at 4 49 34 PM](https://github.com/pennmeg/a11y-actions/assets/28637810/c3691b23-8b05-42c3-bedd-a2d474a0dd8f)

![Screen Shot 2024-03-25 at 4 49 53 PM](https://github.com/pennmeg/a11y-actions/assets/28637810/06c3ea33-b846-4203-8ec1-92b8ae72175d)

### False Positives

1. Based on the [docs](https://docs.deque.com/linter/4.0.0/en/axe-linter-rules), it says that one of the checks is that every input has a label. However, the following code does not fail:

```
  <label>First Name</label>
  <input type="text" />
```

I would expect this to fail because the input does not have an ID/for or aria-labeledby/ID to create a relationship nor is the input wrapped inside the label.

2. Another rule is that `Links must have discernible text` however, this check more tests that text is present NOT how helpful it is. For example, `<a href=""></a>` will fail because there is no text present. However, the linter does not test to determine how understandable the text inside is. Therefore the following does pass: `Click to <a href="">Read More</a>. Or you can click on this link to <a href="">Read More</a>`. This means that manual testing is necessary.

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
