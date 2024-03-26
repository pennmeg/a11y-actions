import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';
import { CustomImage } from './components/CustomImage';

function App() {
  return (
    <div className="App">
      <h1>Accessibility Linter & GitHub Actions</h1>
      <hr />
      <h2>Images and Alterative Text</h2>
      <div className="image-wrapper">
        <img src={logo} className="image-logo" alt="Logo" />
        {/* TO DO: Building a custom component to manage config linter ruleset */}
        <CustomImage path={logo} />
      </div>
      <h2>Forms and Inputs</h2>
      {/* Interesting that this doesn't produce a linting error as there is no ID/for between the label and the input */}
      {/* Docs say that it does look for inputs without labels and there is nothing explicit tying these two together */}
      {/* This does fail the browser extension scan test */}
      <div className="form-label-group">
        <label>First Name</label>
        <input type="text" />
      </div>
      <h2>Buttons</h2>
      <Button text="Click Me"></Button>
      {/* VS Code Linter doesn't appear to find issues like the one below */}
      {/* This should have a tabindex on it so that is is focusable */}
      <div className="button" role="button" onClick={() => console.log("-- Click")}>Click Me: Div</div>
      <h2>Links</h2>
      {/* Link text failure, fails on empty tags with no text not necessarily trusting that the text inside is actually helpful */}
      <a href="">Read More</a>
    </div>
  );
}

export default App;
