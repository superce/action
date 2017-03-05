import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import LeftNav from './components/LeftNav'
class App extends React.Component {
  constructor(){
    super();
    this.state={
      showLeftNav: true
    }

  }
  componentWillMount(){
    this.setLeftNav();
    window.onresize = this.setLeftNav.bind(this)
    this.setTitle()
  }
  setLeftNav(){
    
    this.setState({showLeftNav: window.innerWidth>750/1.5 ? true : false})
  }
  componentWillReceiveProps(){
    this.setTitle();
  }
  setTitle(){
    this.setState({
      title:this.props.router.isActive('/',true) ? '主页' :
            this.props.router.isActive('/blog',) ? '博客' :
            this.props.router.isActive('/work',) ? '工作' :
            this.props.router.isActive('/about',) ? '关于' : '文章'

    })
  }


  render () {
    console.log(this.state.showLeftNav);
    return(
      <div className='root'>
        {this.state.showLeftNav ? <LeftNav /> : <Header />}

          <div className='mywrap'>
            {this.props.children}

          </div>
          {this.state.showLeftNav ? null : <Footer />}

      </div>
    )
  }
}

export default App;
