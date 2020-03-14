import React from 'react';
import logo from './logo.svg';
import './App.css';

const profileData = {
  username: 'RefactoProject',
  email: 'myprofile@thp.fr',
  phoneNumber: '0601020304',
  createdAt: '2020-02-23T07:50:17.335Z',
  firstname: 'TheHacking',
  lastname: 'Project',
  profilePicture: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.thehackingproject.org%2F&psig=AOvVaw3u9ia0dpgLOvoCJeJxU_G5&ust=1584250440364000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCLtPiemegCFQAAAAAdAAAAABAD',
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
      </header>
    </div>
  );
}

export default App;
