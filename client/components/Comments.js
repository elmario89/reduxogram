import React, {Component} from 'react';

class Comments extends Component {
    constructor() {
        super();
        this.addComment = this.addComment.bind(this);
        this.renderComment = this.renderComment.bind(this);
    }

    renderComment(comment, i) {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button onClick={this.props.removeComment.bind(null, this.props.postId, i)} className='remove-comment'>&times;</button>
                </p>
            </div>
        )
    }

    addComment(e) {
        e.preventDefault();

        const {postId} = this.props;
        const comment = this.refs.comment.value;
        const author = this.refs.author.value

        this.props.addComment(postId, author, comment);

        this.refs.commentForm.reset();
    }

    render() {
        return (
            <div className='comments'>
                {this.props.comments.map(this.renderComment)}

                <form onSubmit={this.addComment} ref="commentForm" className='comment-form'>
                    <input type="text" ref='author' placeholder='author' />
                    <input type="text" ref='comment' placeholder='comment' />
                    <input type="submit" hidden/>
                </form>
            </div>
        )
    }
}

export default Comments;