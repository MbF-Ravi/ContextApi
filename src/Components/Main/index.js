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
      handleSubmit: this.handleSubmit,
      data1:[],
    };
  }
  componentDidMount() {
   fetch('https://www.reddit.com/r/reactjs.json')
    .then((result) => {
      // Get the result
      // If we want text, call result.text()
      return result.json();
    }).then((jsonResult) => {
      this.setState({
        data1: jsonResult
      })
    })
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