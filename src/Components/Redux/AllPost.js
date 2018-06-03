import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

import LightBox from '../UIComponents/popup';

import { Table } from 'reactstrap';

import EditComponent from './EditComponent';
var _ = require('lodash');

class AllPost extends Component {


    render() {
        const renderList = this.props.posts.map((post, ind) => {
          return <tr key={ind}>
            <td>{post.title}</td>
            <td>{post.message}</td>
            <td>{post.amount}<LightBox open={post.editing}><EditComponent post={post} key={post.id} /></LightBox></td>
            <td><button
       onClick={()=>this.props.dispatch({type:'EDIT_POST',id:post.id})}>
       Edit</button></td>
            <td><button 
      onClick={()=>this.props.dispatch({type:'DELETE_POST',id:post.id})}>
      Delete</button></td>
          </tr>
        });
        const total = _.sumBy(this.props.posts, function(o) { return o.amount; });
        return (this.props.posts.length >0 ? 
            <div>
                <h1>All Posts</h1>
                <Table hover>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Amount</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderList}
                    <tr>
                      <th></th>
                      <th>Total</th>
                      <th>{total}</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </tbody>
                </Table>
            </div> : <h1>No Post Here </h1>
        );
    }
}
AllPost.propTypes = {
// Pass in a Component to override default element
};
const mapStateToProps = (state) => {
    return {
        posts: state.postReducer
    }
}
export default connect(mapStateToProps)(AllPost);