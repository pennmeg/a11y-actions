import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Accessibility Linter & GitHub Actions</h1>
      <hr />
      <h2>Images and Alterative Text</h2>
      <div className="image-wrapper">
        <img src={logo} className="image-logo"/>
      </div>
      <h2>Forms and Inputs</h2>
      {/* Interesting that this doesn't produce a linting error as there is no ID/for between the label and the input */}
      <div className="form-label-group">
        <label>First Name</label>
        <input type="text"></input>
      </div>
      <h2>Buttons</h2>
      <button className="button" type="button" onClick={() => console.log("-- Click")}>Click Me</button>
      <div className="button" role="button" tabIndex="1" onClick={() => console.log("-- Click")}>Click Me: Div</div>
    </div>
  );
}

export default App;
