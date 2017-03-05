import React, { PropTypes } from 'react'
import axios from 'axios'
import marked from "marked"
import hljs from 'highlight.js';

marked.setOptions({
  highlight:function(code){
    return hljs.highlightAuto(code).value;
  }
})
class Post extends React.Component {
  constructor(){
    super();
    this.state={
      data:''
    }
  }
  componentDidMount(){
    axios.get(`https://raw.githubusercontent.com/superce/action/master/blog/${this.props.params.title}.md`)
    .then( res => this.setState({data:res.data}))
  }

  render(){
     return(
       <div>

        {this.state.data.length==0 ? '正在加载' :
          <div dangerouslySetInnerHTML={{__html:marked(this.state.data)}}>
          </div>
        }
       </div>
     )
  }
}

export default Post;
