import './App.css';
import TaskList from './components/TaskList';
import freeCodeCampLogo from './images/freecodecamp-logo.png';

function App() {
  return (
    <div className="task-app">
      <div className='freecodecamp-logo-container'>
        <img
          src={ freeCodeCampLogo }
          className='freecodecamp-logo'
          alt='freeCodeCamp Logo'
        />
      </div>
      <div className='main-task-list'>
        <h1>To-do list</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
