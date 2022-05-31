import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>About me</p>
        <ul>
          <li>
            Name: <input type={text} value={'Andriy'} />
          </li>
          <li>
            Surname: <input type={text} value={'Marchyck'} />
          </li>
          <li>
            Age: <input type={text} value={17} />
          </li>
          <li>
            Email:
            <input type={text} value={'marchycandriy@gmail.com'} />
          </li>
          <li>
            Phone: <input type={text} value={'+380937009900'} />
          </li>
        </ul>
        <p>Skills</p>
        <ul>
          <li>
            <input type={'text'} value={'HTML'} />
          </li>
          <li>
            <input type={'text'} value={'CSS'} />
          </li>
          <li>
            <input type={'text'} value={'JavaScript'} />
          </li>
          <li>
            <input type={'text'} value={'React'} />
          </li>
          <li>
            <input type={'text'} value={'MongoDB'} />
          </li>
          <li>
            <input type={'text'} value={'.NET'} />
          </li>
          <li>
            <input type={'text'} value={'Angular'} />
          </li>
          <li>
            <input type={'text'} value={'SQL'} />
          </li>
        </ul>
        <p>Languages</p>
        <ul>
          <li>
            <input type={'text'} value={'Ukraine'} />
          </li>
          <li>
            <input type={'text'} value={'Englshe'} />
          </li>
          <li>
            <input type={'text'} value={'Russion'} />
          </li>
        </ul>
        <p>Education</p>
        <ul>
          <li>
            <inpuе type={'text'} value={'IT Step Academy'} />
          </li>
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
