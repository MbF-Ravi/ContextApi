import React, { Component } from 'react';

class InputField extends Component{
	render(){
		const { name, placeholder, value, type } = this.props;
		return <div className="group">      
				<input className="inputMaterial" value={value} type={type} name={name} required onChange={this.props.onChange}/>
				<span className="highlight"></span>
				<span className="bar"></span>
				<label>{placeholder}</label>
		    </div>
	}
}
export default InputField;