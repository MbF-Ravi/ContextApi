import React, { Component } from 'react';
import {connect} from 'react-redux';
import TextField from '../UIComponents/textField';
class PostForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			title:"",
			message:""
		}
	}
	handleSubmit = (e) => {
    e.preventDefault();
    const {title, message} = this.state;
    const data = {
      id: new Date(),
      title,
      message
    }
     this.props.dispatch({
      type:'ADD_POST',
      data
    });
    this.setState({
		title:"",
		message:""
	})
  }
    handleChange(e){
    	this.setState({
    		[e.target.name]:e.target.value
    	})
    }
	render() {
		return (
			<div>
			  <h1>Create Post</h1>
			  <form onSubmit={this.handleSubmit} className="box">			   
			   <TextField name={"title"} value={this.state.title} placeholder={"Enter your name"} onChange={this.handleChange.bind(this)}/>
			   <TextField name={"message"} value={this.state.message} placeholder={"Enter your message"} onChange={this.handleChange.bind(this)}/>
			   <button id="buttonlogintoregister" type="submit">submit</button>
			  </form>
			</div>
		);
	}
}
export default connect()(PostForm);