import * as React from 'react'
import './App.css'
import JsEditor from './JsEditor'
import { Button } from 'material-ui'

const App = () => {
  const runClicked = () => {
    console.log('run clicked!')
  }

  return (
    <div className='App'>
      <div className='App-header'>
        <h2>DynamoDB Query Analyzer</h2>
      </div>
      <div className='Editor'>
        <JsEditor />
      </div>
      <Button raised={true} color='primary' onClick={runClicked}>
        Run
      </Button>
    </div>
  )
}

export default App
