import React from 'react';
import ProfilePhoto from 'ProfilePhoto.jsx';
import Introduction from 'Introduction.jsx';
import styles from 'app.css';

class App extends React.Component {
    render() {
        return (
          <div className = {styles.center}>

              <h3 className = {styles.center_text}>Welcome to my page!</h3>
              <ProfilePhoto style = {styles.center_profile}/>
              <Introduction style = {styles.center_text}/>

          </div>
        );
    }
}

export default App;