import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../PostActions';
import { getShowAddPost } from '../../../App/AppReducer';
import { getPosts } from '../../PostReducer';

class PostListPage extends Component {
  render() {
    return null;
  }
}

// Actions required to provide data for this component to render in sever side.
PostListPage.need = [() => {
  return fetchPosts();
}];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddPost: getShowAddPost(state),
    posts: getPosts(state),
  };
}

export default connect(mapStateToProps)(PostListPage);
