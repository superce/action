import React, { PropTypes } from 'react'
import axios from 'axios'
class Blog extends React.Component {
  componentDidMount(){
    axios.get('https://raw.githubusercontent.com/newming/demodata/master/duopingshidai.json')
    .then( res => console.log(res))
  }
  render () {
    return(
      <div>blog</div>
    )
  }
}

export default Blog;
