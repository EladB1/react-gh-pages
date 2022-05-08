//import logo from './logo.svg';
//import './Css/App.css';
import './Sass/Project.scss';
import './Sass/menu.scss';
import './Sass/common.scss';
import Projects from './projects.json';

const Project = props => {
    return (
        <div class="project">
            <div id="section1">
                <p id="title">{props.title}</p>
                {props.start != null && props.end != null &&
                    <p id="time">{props.start}-{props.end}</p>
                }
                {props.link != null &&
                    <a href={props.link} className="p_link"
                    rel="noopener noreferrer" target="_blank"
                    >Project Link</a>
                }
            </div>
            <div id="section2">
                <p id="descr">{props.Description}</p>
            </div>
            <div id="section3">
                <div id="tags">
                  {props.tags.map((tag, index) => {
                      return (
                          <p class="tag">{tag}</p>
                      )
                  })}
                </div>
            </div>
        </div>
    );
};

function App() {
  let list = Projects.Projects;
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
        <div className="menu">
            <div className="About">About</div>
            <div className="Skills">Skills</div>
            <div className="Projects">Projects</div>
            <div className="Contact">Contact</div>
        </div>
        <div className="projectDisplay">
            {list.map((project, index) => {
                return (<Project
                    title={project.title}
                    start={project.start}
                    end={project.end}
                    link={project.link}
                    Description={project.Description}
                    tags={project.tags}
                />)
            })}
        </div>
      </header>
    </div>
  );
}

export default App;
