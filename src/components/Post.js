import React, { PropTypes } from 'react'

class Post extends React.Component {
  render () {
     return(
       <div>
        post:
        {this.props.params.title}
       </div>
     )
  }
}

export default Post;
