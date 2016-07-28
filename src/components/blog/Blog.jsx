import React from 'react';
import Title from 'Title.jsx';
import Content from 'Content.jsx';
import {Link} from 'react-router';
import Sidebar from 'Sidebar.jsx';
import styles from 'app.css';
import blog_style from 'blog.css';

class Blog extends React.Component {
    render() {
        return(
        <div>
            <Sidebar />
            <div className = {styles.main}>
                <div className = {[styles.center_profile, blog_style.container].join(" ")}>
                    <Title />
                    <Content />
                </div>

            </div>
        </div>
        )
    }
}

export default Blog;