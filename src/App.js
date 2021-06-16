import CodeEditor from './CodeEditor/CodeEditor';
import './App.css';

function App() {
  return (
    <>
      <nav className="nav-bar">
        <h1>CodePen</h1>

        <a href="https://github.com/ujjwal404">
          <img
            src="https://www.svgrepo.com/show/303615/github-icon-1-logo.svg"
            alt="github"
            className="icon"
          />
        </a>
      </nav>
      <div>
        <CodeEditor />
      </div>
    </>
  );
}

export default App;
