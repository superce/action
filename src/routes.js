import React, { PropTypes } from 'react';
import {Router,Route,browserHistory,IndexRoute} from 'react-router';


import App from './App';
import Home from './components/Home'
import Blog from './components/Blog'
import About from './components/About'
import Work from './components/Work'
import Post from './components/Post'
export default function(){
  return(
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='blog' component={Blog}/>
        <Route path='about' component={About}/>
        <Route path='Work' component={Work}/>
        <Route path='Post/:title' component={Post}/>

      </Route>
    </Router>
  )

}
