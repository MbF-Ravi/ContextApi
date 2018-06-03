import React, { Component } from 'react';

class LightBox extends Component {

render() {
  const { children } = this.props;
  return <div className="lightBox">{children}</div>
  }
}
export default LightBox;