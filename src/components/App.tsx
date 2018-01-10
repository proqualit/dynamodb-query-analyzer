import * as React from 'react'
import './App.css'
import JsEditor from './JsEditor'

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>DynamoDB Query Analyzer</h2>
        </div>
        <div className='Editor'>
          <JsEditor />
        </div>
      </div>
    )
  }
}

export default App
