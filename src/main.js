import React from 'react';
import ReactDom from 'react-dom';
import App from 'App.jsx';
import Blog from 'Blog.jsx';
import {Router, Route} from 'react-router';


ReactDom.render(
    (<Router>
        <Route path="/" component={App} />
        <Route path="/blog" component={Blog} />
    </Router>), document.getElementById('root'));