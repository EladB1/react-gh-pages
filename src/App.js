import logo from './logo.svg';
import './App.css';
import './Project.css';

const ProjectTitle = (props) => {

};

const ProjectDescription = (props) => {

};

const ProjectTimeFrame = (props) => {

};

const ProjectTags = (props) => {

};

const Project = (props) => {
    return (
        <div class="project">
          <p id="title">Title</p>
          <p id="time">June 2019-Oct. 2019</p>
          <hr id="sep1"/>
          <p id="descr">Description of project that took X amount of time to complete and involved doing something or another</p>
          <hr id="sep2"/>
          <div id="tags">
            <p class="tag">Python</p>
            <p class="tag">MongoDB</p>
          </div>
        </div>
    );
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
        <div id="projectDisplay">
            <Project />
            <Project />
        </div>
      </header>
    </div>
  );
}

export default App;
