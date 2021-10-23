import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Redux with Thunk"
    };
  }

  render() {
    return (
      <div className="main-container">
        <h2>{this.state.title}</h2>
      </div>
    );
  }
}


export default App;
