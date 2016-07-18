import React from 'react';
import ProfilePhoto from './ProfilePhoto.jsx';
import Introduction from './Introduction.jsx';

class App extends React.Component {
    render() {
        return (
          <div>
              <h3>Welcome to my page!</h3>
              <ProfilePhoto />
              <Introduction />
          </div>
        );
    }
}

export default App;