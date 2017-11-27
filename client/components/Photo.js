import React, {Component} from 'react';

class Photo extends Component {
    render() {
        const post = this.props.post;

        return (
          <figure className="grid-figure">
              {post.caption}
          </figure>
        )
    }
}

export default Photo;
