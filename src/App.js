import './App.css';
import React, {useState} from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar' 
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

const  App = () => {

   const secretApiKey=process.env.REACT_APP_NEWS_API
  //  const secretApiKey=process.env.REACT_APP_NEWS_API1

    const pageSize = 9;
    const [progress, setProgress] = useState(0);
  
    
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color='#f11946' progress={progress}/>
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"  apiKey={secretApiKey}/>} />
            <Route exact path="/business" element={<News setProgress={setProgress} key="business"pageSize={pageSize} country="in" category="business"  apiKey={secretApiKey}/>} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment"pageSize={pageSize} country="in" category="entertainment"  apiKey={secretApiKey}/>} />
            <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"  apiKey={secretApiKey}/>} />
            <Route exact path="/health" element={<News setProgress={setProgress} key="health"pageSize={pageSize} country="in" category="health"  apiKey={secretApiKey}/>} />
            <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science"  apiKey={secretApiKey}/>} />
            <Route exact path="/sports" element={<News setProgress={setProgress} key="sports"pageSize={pageSize} country="in" category="sports"  apiKey={secretApiKey}/>} />
            <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology"  apiKey={secretApiKey}/>} />
          </Routes>
        </Router>
      </div>
    );
 
}

export default App;
