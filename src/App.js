import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Accessibility Linter & GitHub Actions</h1>
      <hr />
      <h2>Images and Alterative Text</h2>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
      </div>
      <h2>Forms and Inputs</h2>
      {/* Interesting that this doesn't produce a linting error as there is no ID/for between the label and the input */}
      <label>First Name</label>
      <input type="text"/>
    </div>
  );
}

export default App;
