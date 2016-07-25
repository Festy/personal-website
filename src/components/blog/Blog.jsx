import React from 'react';
import Title from 'Title.jsx'
import Content from 'Content.jsx'
import {Link} from 'react-router';

class Blog extends React.Component {
    render() {
        return(
        <div>
            <Link to="/"> Back </Link>
            <Title />
            <Content />
        </div>
        )
    }
}

export default Blog;