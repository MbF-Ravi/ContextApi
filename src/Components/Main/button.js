import React, { Component } from 'react';
import { FreeContext } from './freeContext';
class Button extends Component {  
  render() {
    // The entire state is passed to the provider
    return (
      <FreeContext.Consumer>
         {(context) => (<button onClick={context.handleSubmit}>{context.labelName}</button>)}
      </FreeContext.Consumer>
    );
  }
}

export default Button;