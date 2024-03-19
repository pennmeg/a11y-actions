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
      <h2>Forms</h2>
      <label>Name</label>
      <input type="text"></input>
    </div>
  );
}

export default App;
