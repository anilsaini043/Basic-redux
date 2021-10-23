import React from 'react';

class Child extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            updateCounter: 0
        }
    }

    changeBrandValue(){
        this.setState({updateCounter: this.state.updateCounter+1})
        this.props.changeBrand(this.state.updateCounter)
    }

    render(props) {
      return (
          <>
            <p>From Parent: {this.props.brand}</p>
            <button onClick={()=> {this.changeBrandValue()}}>Update</button>
          </>
      )
    }
  }

  export default Child;