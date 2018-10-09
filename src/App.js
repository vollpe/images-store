import React, { Component } from 'react';
import {Header} from "./components/Header";
import {MainContent} from "./components/MainContent";
import {Footer} from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <MainContent/>
        <Footer/>
      </div>
    );
  }
}

export default App;
