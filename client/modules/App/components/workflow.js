import { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

// Import Actions
import { addPosts, fetchPosts } from '../../Post/PostActions';

// Import Selectors
import { getPosts } from '../../Post/PostReducer';
import { connect } from 'react-redux';
import Tree from './Diagram';


const datas = {"components":{"_id":"5c71c414522862eb41807410","myId":"10","status":"LOOOOOL","isProduct":true,"__v":0,"materials":[{"_id":"5c71c414522862eb41807407","name":"wooden floor","__v":0}],"components":[{"_id":"5c71c414522862eb4180740f","myId":"4","status":"blocked","isProduct":false,"__v":0,"materials":[],"components":[{"_id":"5c71c414522862eb4180740e","myId":"3","status":"ready","isProduct":false,"__v":0,"materials":[{"_id":"5c71c414522862eb41807409","name":"wooden front","__v":0},{"_id":"5c71c414522862eb4180740a","name":"entry cutout","__v":0}],"components":[]},{"_id":"5c71c414522862eb4180740d","myId":"2","status":"ready","isProduct":false,"__v":0,"materials":[{"_id":"5c71c414522862eb41807408","name":"wooden side","__v":0},{"_id":"5c71c414522862eb41807408","name":"wooden side","__v":0},{"_id":"5c71c414522862eb41807408","name":"wooden side","__v":0}],"components":[]}]},{"_id":"5c71c414522862eb4180740c","myId":"1","status":"ready","isProduct":false,"__v":0,"materials":[{"_id":"5c71c414522862eb4180740b","name":"wooden roof","__v":0},{"_id":"5c71c414522862eb4180740b","name":"wooden roof","__v":0}],"components":[]}]}}

let status = (status) => {
  console.log(status);

  return	{
    className: 'node ' +  status
  }}

let parseMaterial = (material) => ({
  name: material.name,
  gProps: status('complete')
})

let name = (id) => {
  return id === "1" ? "Roof" :
    id === "2" ? "Back and sides" :
      id === "3" ? "Door" :
        id === "4" ? "Walls" :
          id === "5" ? "Dog House" : "Random Piece"
}


let data = (treeData) => {
  console.dir(treeData);
  return {
    name: name(treeData.myId),
    gProps: status(treeData.status),
    children: treeData.components.map(data).concat( treeData.materials.map(parseMaterial))
  }
};

class Workflow extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props
    let postsComponent = null;
    if (posts) {
      postsComponent = (<p>{posts.status}</p>);
    }
    console.log('posts: ', posts)

    const doSomething = () => {
      console.log('pressed')
      this.props.dispatch(addPosts(datas.components))
    }
    return (
      <div>
        <p>Hi, I am your workflow</p>
        <button onClick={doSomething}> click me</button>
        <Tree
          data={data(posts)}
          height={500}
          width={800}
          animated/>
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
