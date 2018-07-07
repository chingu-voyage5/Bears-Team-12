import React, { Component } from 'react';
import Redirect from 'react-router-dom/Redirect';
import QrReader from 'react-qr-reader'

class OrderScanner extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 300,
      result: null,
    }
    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    if(data){
      this.setState({
        result: data,
      })
    }
    
  }
  handleError(err){
    console.error(err)
  }
  render(){
    if (this.state.result) {
      return <Redirect to={'/orders/' + this.state.result } />
    }

    return(
      <div>
        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{height: 240, width: 320}}
          />
        <br/><br/><br/><br/><br/><br/><br/>
        <br/>  
        <p>Result: {this.state.result}</p>
      </div>
    )
  }
}

export default OrderScanner;