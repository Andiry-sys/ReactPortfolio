import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>About me</p>
        <ul>
          <li>Name: Andriy</li>
          <li>Surname: Marchyck</li>
          <li>Age: 17</li>
          <li>Email: marchycandriy@gmail.com</li>
          <li>Phone: +380937009900</li>
        </ul>
        <p>Skills</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>.NET</li>
          <li>Angular</li>
          <li>SQL</li>
        </ul>
        <p>Languages</p>
        <ul>
          <li>Ukrainian</li>
          <li>English</li>
          <li>Russian</li>
        </ul>
        <p>Education</p>
        <ul>
          <li>IT Step Academy</li>
        </ul>
      </header>
      <footer className="App-Footer">
        <a
          className="App-link"
          href="https://github.com/Andiry-sys"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </footer>
    </div>
  );
}

export default App;
