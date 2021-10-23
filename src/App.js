import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { nameAction } from "./redux/actions/nameAction"

class App extends React.Component {

  render(props) {
    return (
      <div className="main-container">
        <h2>Redux with Thunk</h2>
        <div className="center-div">
          <h4>
            {this.props.nameFromStore}
          </h4>
          
        </div>
        <button onClick={()=> this.props.changeName()}>Change Name</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nameFromStore: state.name
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    changeName: ()=> {dispatch(nameAction())}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
