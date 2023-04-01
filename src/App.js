import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar' 
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

class App extends Component {

     pageSize = 9;
    //  secretApiKey=process.env.REACT_APP_NEWS_API
     secretApiKey=process.env.REACT_APP_NEWS_API1
     state = {
      progress:0
     }
     setProgress = (progress) =>{
      this.setState({progress:progress})
     }
    
     
  render() {
    
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
    
      />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"  apiKey={this.secretApiKey}/>} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business"pageSize={this.pageSize} country="in" category="business"  apiKey={this.secretApiKey}/>} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment"pageSize={this.pageSize} country="in" category="entertainment"  apiKey={this.secretApiKey}/>} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"  apiKey={this.secretApiKey}/>} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health"pageSize={this.pageSize} country="in" category="health"  apiKey={this.secretApiKey}/>} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science"  apiKey={this.secretApiKey}/>} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports"pageSize={this.pageSize} country="in" category="sports"  apiKey={this.secretApiKey}/>} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology"  apiKey={this.secretApiKey}/>} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
