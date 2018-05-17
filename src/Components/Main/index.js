import React, { Component } from 'react';

import SampleForm from './form';

import { FreeContext, helpers } from './freeContext';

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = () => {
       this.setState(state => ({
        labelName: "loading",
      }));
      setTimeout(() =>{
          this.setState(state => ({
            labelName: "done",
          }));
       }, 3000);
    }
    this.state = {
      labelName: helpers.labelName,
      handleSubmit: this.handleSubmit
    };
  }
  render() {
    return (
      <div>
         <FreeContext.Provider value={this.state}>
          <SampleForm />
         </FreeContext.Provider>
      </div>
    );
  }
}

export default MainComponent;