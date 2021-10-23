import React from 'react';
import './App.css';
import Child from "./childComponent";
import { nameAction, foodAction } from "./redux/actions/actions"
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {brand: "TATA", counter:''};
  }

  changeBrand(count){
    this.setState({counter:count})
  }
  
  render(props) {
    return (
      <div className="main-container">
        <h2>React with Redux</h2>
        <div className="container">
          <div>
            <p>Data From Redux Store</p>
            <hr />
            <p>Change Name: {this.props.myName} </p>
            <p>Change Food: {this.props.myFood} </p>
            <button onClick={() => { this.props.changeMyName("Deepu") }}>Change Name</button>
            <button onClick={() => { this.props.changeMyFood("Panner") }}>Change Food</button>
          </div>
          <div style={{ marginLeft: '20px' }}>
            <p>Data coming from Child and Parent</p>
            <hr />
            <p>From Child: {this.state.counter} </p>
            <Child brand={this.state.brand} changeBrand={this.changeBrand.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myName: state.changeName.name,
    myFood: state.changeFood.food
  }
}

const mapDispatchToProps = (dispatch) => { 
  return {
    changeMyName: (name) => { dispatch(nameAction(name)) },
    changeMyFood: (food) => { dispatch(foodAction(food)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
