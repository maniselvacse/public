import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import Header from './components/header/header';
import Body from './components/body/body';
export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      popup: {}
    }

    this.receiveDataFromChild = this.receiveDataFromChild.bind(this);
  }

  receiveDataFromChild(data) {
    this.setState({popup: data});
  }

  render() {
    return (
      <React.StrictMode>
        <Header sendDataToParent = {this.receiveDataFromChild}/>
        <Body popup = {this.state.popup} sendDataToParent = {this.receiveDataFromChild}/>
      </React.StrictMode>
    );
  }

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);

reportWebVitals();
