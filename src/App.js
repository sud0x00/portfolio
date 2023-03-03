import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container-fluid text-center">
      <header className="row p-5">
        <div className="col-12">
          <h1 className="display-3">Welcome to My Landing Page</h1>
          <p className="lead">This is some example text.</p>
          <button className="btn btn-lg btn-primary">Get Started</button>
        </div>
      </header>
    </div>
  );
}

export default App;
