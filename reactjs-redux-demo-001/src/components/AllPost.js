import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import EditPostForm from './EditPostForm';


class AllPost extends Component {
    render() {
        let nooflikes = this.props.posts.filter(post => post.like == true).length;
        return (
            <div className="post-container">
                <h1 className="post_heading">All Posts</h1>
                <center><h1>No. of Likes: {nooflikes}</h1></center>
                {this.props.posts.map((post) => (
                    <div key={post.id}>
                        {post.editing ?
                            <EditPostForm post={post} key={post.id} /> :
                            <Post key={post.id} post={post} />}
                    </div>
                ))}
            </div>
        );
    }
}

const postsData = (state) => state.postReducer;

const mapStateToProps = (state) => {
    return {
        posts: postsData(state)
    }
}
export default connect(mapStateToProps)(AllPost);