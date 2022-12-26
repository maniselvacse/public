import React from 'react';
import axios from 'axios';

class profileServices extends React.Component {

  // constructor(props) { super(props); }

  getProfile() {
    return axios.get(`http://localhost:3001/profile`)
      .then(
        (result) => {
          return this.profileResponse = ({
            profileLoader: true,
            profileData: result
          });
        },
        (error) => {
          return this.profileResponse = ({
            profileLoader: true,
            profileError: error
          });
        }
      );
  }
}

export default profileServices;