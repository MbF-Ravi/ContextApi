import React, { Component } from 'react';
import { FreeContext } from './freeContext';
class Button extends Component {  
  render() {
    // The entire state is passed to the provider
    return (
      <FreeContext.Consumer>
         {(context) => (
         	<div>
         		<button onClick={context.handleSubmit}>{context.labelName}</button>
         		<ul>
	         		{context.data1.data!==undefined && context.data1.data.children.map((el,i)=>{
	         			return <li key={i}>{el.data.author}</li>
	         		})}
	         	</ul>
         	</div>
         )}
      </FreeContext.Consumer>
    );
  }
}

export default Button;