import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import '../styles/index.css';
import PlayListForm from './PlayListForm';
import PlayList from './PlayList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      songs: []
    }
  }

  componentDidMount(){
    console.log('test')
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
      console.log(data)
      console.log("state", this.state.songs);
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Playlist</h1>
        </div>
        <div className="wrapper">
          <PlayListForm/>
          <PlayList songs={this.state.songs}/>
        </div>
      </div>
    );
  }
}

export default App;
