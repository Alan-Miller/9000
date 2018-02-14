import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  constructor() {
    super()
    this.state = {
      scrollAmt: 0
    }
  }

  componentWillMount() {
    axios.get('/over').then(resp => {
      this.setState({
        over: resp.data
      })
    })

    document.addEventListener('scroll', () => {
      this.setState({
        scrollAmt: window.scrollY
      })
      if (window.scrollY > 9000) {
        axios.put('/over').then(resp => {
          this.setState({
            over: resp.data
          })
        })
      }

    })
  }

  render() {
    return (
      <div className="App">

        <div className="Header" style={window.scrollY >= 370 ? { background: 'rgb(100, 100, 100)' } : null}>
          Amount of scroll: {~~(this.state.scrollAmt)}
        </div>

        <div className="box">
          box
        </div>

        <div className="modal" style={this.state.over === true ? { display: 'flex' } : { display: 'none' }}>
          IT'S OVER 9000!
        </div>

      </div>
    );
  }
}

export default App;
