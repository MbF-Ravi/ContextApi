import React, { Component } from 'react';

class LightBox extends Component {

render() {
  const { children, open } = this.props;
  return <div className={"lightBox " +(open?"opened":"")}>
	  	<div className="lightBoxContent">
	  		{children}
	  	</div>
  	</div>
  }
}
export default LightBox;