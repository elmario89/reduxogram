import React from 'react';
import Photo from './Photo';
// improt comments
import Comments from './Comments';

const Single = React.createClass({
    render() {
        // index of the post
        const {postId} = this.props.params;

        const i = this.props.posts.findIndex(post => post.code === postId);
        // actual post
        const post = this.props.posts[i];

        const comments = this.props.comments[postId] || [];

        return (
            <div className="single-photo">
                <Photo index={i} post={post} {...this.props} />
                <Comments 
                    comments={comments}
                    postId={postId}
                    addComment={this.props.addComment}
                    removeComment={this.props.removeComment}
                />
            </div>
        )
    }
})

export default Single;