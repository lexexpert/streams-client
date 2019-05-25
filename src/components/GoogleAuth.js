import React from 'react';
import GoogleAuthKey from '../keys/GoogleAuthKey';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: <GoogleAuthKey/>,
        scope: 'email'
      });
    });
  }

  render() {
    return (
      <div>
        Google
      </div>
    );
  }
}
export default GoogleAuth;
