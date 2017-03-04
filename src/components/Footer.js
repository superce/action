import React, { PropTypes } from 'react'
import {Link} from 'react-router'
class Footer extends React.Component {
  render () {
    return(

      <footer>

        <Link to='/' activeStyle={{color:'black'}} onlyActiveOnIndex={true}><i className="fa fa-home" aria-hidden="true"></i></Link >
        <Link to='Blog' activeStyle={{color:'black'}}><i className="fa fa-music" aria-hidden="true"></i></Link>
        <Link to='About' activeStyle={{color:'black'}}><i className="fa fa-car" aria-hidden="true"></i></Link>
        <Link to='Work' activeStyle={{color:'black'}}><i className="fa fa-qq" aria-hidden="true"></i></Link>

      </footer>
    )
  }
}

export default Footer;
