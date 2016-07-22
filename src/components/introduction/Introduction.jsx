import React from 'react';
import styles from 'introduction.css';

class Introduction extends React.Component {
    render() {
        return (
            <div className={ [styles.description, this.props.style].join(' ') }>
                Hi! My name is Utsav Patel. Web developer, working as a software engineer at Citrix, inc.
            </div>
        );
    }
}

export default Introduction;