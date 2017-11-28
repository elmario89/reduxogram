import React, {Component} from 'react';

class Comments extends Component {
    constructor() {
        super();
        this.addComment = this.addComment.bind(this);
    }

    renderComment(comment, i) {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className='remove-comment'>&times;</button>
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