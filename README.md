# A11y-Actions

## Goal
- Create a workflow on GitHub Actions
- Use the Deque Axe DevTools Linter to test whether code is/not accessible

## How It Works

Upon creating of a new PR, the linter runs checking for any issues. 

This only relates to files that had committed changes. Therefore previous issues, in untouched files, won't be tested but previous issues in the same file will be found/caught.

![Screenshot of the GitHub Action for Accessibility Linter running](https://github.com/pennmeg/a11y-actions/assets/28637810/14e3beaf-a67c-42b7-a5fd-a72d2a0bdd68)

_Image Summary: Screenshot of the accessibility check in progress. The text "Some checks haven't completed yet" appears in yellow text, with a light gray test of "1 in progress check" underneath it. The "Linting for accessibility issues" is currently in progress._

### Failures

![Screenshot of the GitHub Action for Accessibility Linter failing](https://github.com/pennmeg/a11y-actions/assets/28637810/c3691b23-8b05-42c3-bedd-a2d474a0dd8f)

_Image Summary: Screenshot of the accessibility check that has failed. The text "All checks have failed" appears in red text, with a light gray test of "1 failing check" underneath it. The "Linting for accessibility issues" is has failed._

![Output of failures](https://github.com/pennmeg/a11y-actions/assets/28637810/06c3ea33-b846-4203-8ec1-92b8ae72175d)

### Notes

1. Labels

Based on the [Axe Linter rules documentation](https://docs.deque.com/linter/4.0.0/en/axe-linter-rules), it says that one of the checks is that every input has a label. However, the following code does not fail as I'd expect. This is actually expected behavior in a React application [see Issue I raised and response](https://github.com/dequelabs/axe-core/issues/4384).

```
  <label>First Name</label>
  <input type="text" />
```

2. Link text

Another rule is that `Links must have discernible text` however, this check more tests that text is present NOT how helpful it is. For example, `<a href=""></a>` will fail because there is no text present. However, the linter does not test to determine how understandable the text inside is. Therefore the following does pass: `Click to <a href="">Read More</a>. Or you can click on this link to <a href="">Read More</a>`. This means that manual testing is necessary.

### Using VS Code

If you're using VS Code, Deque has a free extension for Axe Accessibility Linter that can be used to help view possible failures or accessibility feedback prior to pushing up a PR. This uses similar rules as the Axe DevTools Linter.

#### GitHub Co Pilot

I recently started a trial with GitHub CoPilot (in the middle of building this repo), and was pleasantly surprised to see the ability to ask CoPilot to try to fix the accessibility issue or explain it.

![GitHub CoPilot providing a recommendation for the accessibility error that a link does not have discernible text. It recommends adding the words "Learn More" inside the anchor tag.](https://github.com/pennmeg/a11y-actions/assets/28637810/adec4634-618e-4235-bd6d-4ab4a2088b25)

_Image Summary: When asked to fix the issue, GitHub CoPilot providing a recommendation for the accessibility error that a link does not have discernible text. It recommends adding the words "Learn More" inside the anchor tag. There is an option to accept or dismiss this fix._

When asked for an explanation for the error `axe-linter (link-name): Ensures links have discernible text`: 

```
The axe-linter warning you're seeing is related to accessibility. In your current code: <a href=""></a>

You have an anchor tag (<a>) with an empty href attribute and no inner text. This is not accessible because screen readers and other assistive technologies rely on the inner text of the link to describe its purpose to users.

To resolve this warning, you should provide discernible text within the anchor tag. For example: <a href="https://example.com">Visit Example.com</a>

In this example, "Visit Example.com" is the discernible text that describes the purpose of the link to the user. If the link is purely decorative or not meant to be interacted with, consider using a different element or adding aria-hidden="true" to the anchor tag.
```

#### Config Rules

Axe Devtools Linter supports turning rules on/off, such as: 

```
// axe-linter.yml

rules:
  tabindex: false
```

As well as, providing rules for custom components. I created an image component that accepts a path and alt text as props. I was able to configure the linter to treat this component as an image, and tell it which property is the alt text equivalent and to point to that when applying the alternative text is require ruleset.

```
// axe-linter.yml

global-components:
  CustomImage:
    element: img
    attributes:
    - altText: alt
```

The output is that use of the CustomImage component without passing an `altText` prop results in a failing test.

![Screen Shot 2024-03-26 at 2 10 18 PM](https://github.com/pennmeg/a11y-actions/assets/28637810/4f1f670b-a5f2-4caa-8b5e-e8cd07053218)

## Created using Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
