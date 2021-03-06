import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import PropTypes from 'prop-types';

function Posts(props) {
  useEffect(() => {
    props.fetchPosts();
    return () => {};
  }, []);

  const postItems = props.posts.map((post) => (
    <div key="post.id">
      <h3>
        {post.id}. {post.title}
      </h3>
      <p>{post.body}</p>
    </div>
  ));
  return (
    <div>
      <h1>Posts</h1>
      {postItems}
    </div>
  );
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  posts: state.posts.items,
});

const mapDispatchToProps = { fetchPosts };

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
