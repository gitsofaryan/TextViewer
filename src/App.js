import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert'

import {
  BrowserRouter as Router,
  Switch,
  Routes,
} from "react-router-dom"


function App() {
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      showAlert("Dark Mode Enabled", "Succes")
      document.title = "TextViewer - Dark Mode"

      setInterval(() => {
        document.title = "TextViewer - Is Amazing"

      }, 1000)

      setInterval(() => {
        document.title = "TextViewer - Install Now"

      }, 3000)
        ;
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "Succes")
      document.title = "TextViewer - Light Mode"
    }
  }


  const [alert, setAlert] = useState(null)


  const showAlert = (message, type) => {


    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const [mode, setMode] = useState('light')
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
            </Route>
          </Switch>
        </div >
      </Router>
    </>
  );
}

export default App;
