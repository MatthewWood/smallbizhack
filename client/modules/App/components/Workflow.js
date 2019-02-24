import { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import openSocket from 'socket.io-client';

// Import Actions
import { addPosts, fetchPosts } from '../../Post/PostActions';

// Import Selectors
import { getPosts } from '../../Post/PostReducer';
import { connect } from 'react-redux';
import Tree, { Diagram } from './Diagram';


const datas = {"components":{"_id":"5c71c414522862eb41807410","myId":"10","status":"LOOOOOL","isProduct":true,"__v":0,"materials":[{"_id":"5c71c414522862eb41807407","name":"wooden floor","__v":0}],"components":[{"_id":"5c71c414522862eb4180740f","myId":"4","status":"blocked","isProduct":false,"__v":0,"materials":[],"components":[{"_id":"5c71c414522862eb4180740e","myId":"3","status":"ready","isProduct":false,"__v":0,"materials":[{"_id":"5c71c414522862eb41807409","name":"wooden front","__v":0},{"_id":"5c71c414522862eb4180740a","name":"entry cutout","__v":0}],"components":[]},{"_id":"5c71c414522862eb4180740d","myId":"2","status":"ready","isProduct":false,"__v":0,"materials":[{"_id":"5c71c414522862eb41807408","name":"wooden side","__v":0},{"_id":"5c71c414522862eb41807408","name":"wooden side","__v":0},{"_id":"5c71c414522862eb41807408","name":"wooden side","__v":0}],"components":[]}]},{"_id":"5c71c414522862eb4180740c","myId":"1","status":"ready","isProduct":false,"__v":0,"materials":[{"_id":"5c71c414522862eb4180740b","name":"wooden roof","__v":0},{"_id":"5c71c414522862eb4180740b","name":"wooden roof","__v":0}],"components":[]}]}}

class Workflow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      socket: openSocket('http://localhost:8001'),
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchPosts());
    this.state.socket.on('components',  components => {
      this.props.dispatch(addPosts(components))
    });
  }

  render() {
    const { posts } = this.props

    const doSomething = () => {
      this.props.dispatch(addPosts(datas.components))
    }
    return (
      <div>
        <h2>Dog House manufacturing workflow - Order #1</h2>
        <button onClick={doSomething}> click me</button>
        <Diagram treeData={posts} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
Workflow.need = [() => { return fetchPosts(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    posts: getPosts(state),
  };
}

Workflow.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(Workflow);
