import React from 'react';
import ProfilePhoto from 'ProfilePhoto.jsx';
import Introduction from 'Introduction.jsx';
import styles from 'app.css';
import Sidebar from 'Sidebar.jsx';

class App extends React.Component {

    render() {
        return (
            <div>
                <Sidebar />
                <div className = {styles.main}>
                    <div>

                        <h3 className = {styles.center_text}>Welcome to my page!</h3>
                        <ProfilePhoto style = {styles.center_profile}/>
                        <Introduction style = {styles.center_text}/>

                    </div>
                    <br />
                    <br />
                </div>
            </div>
        );
    }
}

export default App;