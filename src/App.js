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
        <CustomImage path={logo} />
      </div>
      <h2>Forms and Inputs</h2>
      {/* Interesting that this doesn't produce a linting error as there is no ID/for between the label and the input */}
      <div className="form-label-group">
        <label>First Name</label>
        <input type="text"></input>
      </div>
      <h2>Buttons</h2>
      <Button text={"Click Me"}></Button>
      <div className="button" role="button" tabIndex="3" onClick={() => console.log("-- Click")}>Click Me: Div</div>
    </div>
  );
}

export default App;
