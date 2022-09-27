import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default function App (){
  const [progress,setProgress] = useState(0);
  const pageSize = 8;
  const apiKey = process.env.REACT_APP_NEWS_APIKEY;

    return (
      <BrowserRouter>
        <div>

          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
            // onLoaderFinished={() => setProgress(0)}
            height={3}
            waitingTime={500}
          />
          <Routes>
            <Route path="/" exact element={<Newsletter setProgress={setProgress} key="general" country="in" pageSize={pageSize} category="general" apiKey={apiKey} />} />
            <Route path="/business" exact element={<Newsletter setProgress={setProgress} key="business" country="in" pageSize={pageSize} category="business" apiKey={apiKey} />} />
            <Route path="/entertainment" exact element={<Newsletter setProgress={setProgress} key="entertainment" country="in" pageSize={pageSize} category="entertainment" apiKey={apiKey} />} />
            <Route path="/health" exact element={<Newsletter setProgress={setProgress} key="health" country="in" pageSize={pageSize} category="health" />} apiKey={apiKey} />
            <Route path="/science" exact element={<Newsletter setProgress={setProgress} key="science" country="in" pageSize={pageSize} category="science" apiKey={apiKey} />} />
            <Route path="/sports" exact element={<Newsletter setProgress={setProgress} key="sports" country="in" pageSize={pageSize} category="sports" apiKey={apiKey} />} />
            <Route path="/technology" exact element={<Newsletter setProgress={setProgress} key="technology" country="in" pageSize={pageSize} category="technology" apiKey={apiKey} />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    )
}
