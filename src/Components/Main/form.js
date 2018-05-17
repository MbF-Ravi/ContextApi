import React, { Component } from 'react';
import Button from './button';
class SubForm extends Component {
    constructor(props) {
      super(props);    
      this.state = {
        fName:"", 
        lName:""
      };
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
      this.setState({
        [e.target.name] : [e.target.value]
      })
    }
    render() {
    // The entire state is passed to the provider
    
    return (
      <div>
        <input type="text" value={this.state.fName} name="fName" onChange={this.handleChange.bind(this)}/>
        <input type="text" value={this.state.lName} name="lName" onChange={this.handleChange.bind(this)}/>
        <Button />
      </div>
    );
  }
}

export default SubForm;