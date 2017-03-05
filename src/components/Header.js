import React, { PropTypes } from 'react'
import {hashHistory} from 'react-router';
class Header extends React.Component {
  render () {
    return(
      <header>
        <i className="fa fa-arrow-left" aria-hidden="true" onClick={() => hashHistory.goBack()}></i>
          <h3>我的{this.props.title}</h3>
        <i className="fa fa-home" aria-hidden="true" onClick={() => hashHistory.push('/')}></i>
      </header>
    )

  }
}

export default Header;
