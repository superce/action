import React, { PropTypes } from 'react'
import {Link} from 'react-router'
class LeftNav extends React.Component {
  render () {
    return(
      <div className='LeftNav'>

        <h3>我的博客</h3>


      <Link to='/' activeStyle={{backgroundColor:'rgba(0,0,0,0.3)'}} onlyActiveOnIndex={true}><i className="fa fa-home" aria-hidden="true"></i></Link >
      <Link to='Blog' activeStyle={{backgroundColor:'rgba(0,0,0,0.3)'}}><i className="fa fa-music" aria-hidden="true"></i></Link>
      <Link to='About' activeStyle={{backgroundColor:'rgba(0,0,0,0.3)'}}><i className="fa fa-car" aria-hidden="true"></i></Link>
      <Link to='Work' activeStyle={{backgroundColor:'rgba(0,0,0,0.3)'}}><i className="fa fa-qq" aria-hidden="true"></i></Link>
      </div>
    )
  }
}

export default LeftNav;
