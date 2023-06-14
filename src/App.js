import React,{Component} from 'react';
import './App.css';
import Scrolling from './components/Scrolling';
import News from './components/News'; 
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state={progress:10}
  // lets use the api key as a secret apikey=process.env.REACT_APP_NEWS_API
  setProgress=(progress) =>
  {
    this.setState({progress:progress})
  }
  render(){
  return (
      <BrowserRouter>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
    <Scrolling/>
    <Routes>
      <Route path="/" element={<News progress={this.setProgress} key='HeadLines' title='Top HeadLines' category='general'/>}/>
      <Route path='/sports' element={<News progress={this.setProgress} key='sports' title='Sports' category='sports'/>} />
      <Route path="/ent" element={<News progress={this.setProgress} key='Entertainment' title='Entertainment' category='entertainment'/>} />
      <Route path="/Bus" element={<News progress={this.setProgress} key='business' title='Buisness' category='business'/>} />
      <Route path="/health" element={<News progress={this.setProgress} key='health' title='Health' category='health'/>} />
      <Route path="/science" element={<News progress={this.setProgress} key='science' title='Science' category='science'/>} />
      <Route path="/technology" element={<News progress={this.setProgress} key='Technology' title='Technology' category='technology'/>} />
    </Routes>
    </BrowserRouter>  
  )
  }
}


