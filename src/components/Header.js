import React, { PropTypes } from 'react'

class Header extends React.Component {
  render () {
    return(
      <header>
        <i className="fa fa-arrow-left" aria-hidden="true"></i>
          <h3>我的博客</h3>
        <i className="fa fa-home" aria-hidden="true"></i>
      </header>
    )

  }
}

export default Header;
