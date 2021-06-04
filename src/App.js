import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import QrReader from 'react-qr-scanner';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 100,
      result: 'No result',
      facingmode: 'rear'
    };

    this.handleScan = this.handleScan.bind(this);
    this.switchCamera = this.switchCamera.bind(this);
  }
  handleScan(data) {
    this.setState({
      result: data
    });
  }
  handleError(err) {
    console.error(err);
  }
  switchCamera() {
    if (this.state.facingmode == 'rear') {
      this.setState({
        facingmode: 'front'
      });
      console.log('front');
    }else if (this.state.facingmode == 'front'){
      this.setState({
        facingmode: 'rear'
      });
      console.log('rear')
    }
  }
  render() {
    const previewStyle = {
      height: 240,
      width: 320
    };

    return (
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          facingMode={this.state.facingmode}
        />
        <p></p>
        <Button variant="primary" onClick={this.switchCamera}>
          Switch Camera
        </Button>
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default App;
