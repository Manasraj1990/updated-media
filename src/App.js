import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state = {
    progress: 0,
  }
  pageSize = 8;
  apiKey = process.env.REACT_APP_NEWS_APIKEY

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <BrowserRouter>
        <div>

          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
            height={3}
            waitingTime={500}
          />
          <Routes>
            <Route path="/" exact element={<Newsletter setProgress={this.setProgress} key="general" country="in" pageSize={this.pageSize} category="general" apiKey={this.apiKey} />} />
            <Route path="/business" exact element={<Newsletter setProgress={this.setProgress} key="business" country="in" pageSize={this.pageSize} category="business" apiKey={this.apiKey} />} />
            <Route path="/entertainment" exact element={<Newsletter setProgress={this.setProgress} key="entertainment" country="in" pageSize={this.pageSize} category="entertainment" apiKey={this.apiKey} />} />
            <Route path="/health" exact element={<Newsletter setProgress={this.setProgress} key="health" country="in" pageSize={this.pageSize} category="health" />} apiKey={this.apiKey} />
            <Route path="/science" exact element={<Newsletter setProgress={this.setProgress} key="science" country="in" pageSize={this.pageSize} category="science" apiKey={this.apiKey} />} />
            <Route path="/sports" exact element={<Newsletter setProgress={this.setProgress} key="sports" country="in" pageSize={this.pageSize} category="sports" apiKey={this.apiKey} />} />
            <Route path="/technology" exact element={<Newsletter setProgress={this.setProgress} key="technology" country="in" pageSize={this.pageSize} category="technology" apiKey={this.apiKey} />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}
