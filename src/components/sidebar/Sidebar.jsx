import React from 'react';
import Styles from 'sidebar.css'
import {Link} from 'react-router';

class Sidebar extends React.Component {
    render() {
        return (
                <div>
                    <Link className={Styles.link + " waves-effect waves-red btn-large btn-flat white-text"} to="blog"> Blog</Link>
                    <Link className={Styles.link + " waves-effect waves-red btn-large"} to="resume"> Resume</Link>
                </div>
        )
    }
}

export default Sidebar;