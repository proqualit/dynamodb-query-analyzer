import * as React from 'react'
import './App.css'
import JsEditor from './JsEditor'
import { Button } from 'material-ui'
import { withState } from 'recompose'
import { executeScript } from '../lib/execute-script'

interface AppProps {
  code: string,
  setCode: (code: string) => string
}

const App: React.SFC<AppProps> = ({ code, setCode }) => {
  const runClicked = () => {
    console.log('run clicked!', code)
    const result = executeScript(code)
    console.log('result', result)
  }

  return (
    <div className='App'>
      <div className='App-header'>
        <h2>DynamoDB Query Analyzer</h2>
      </div>
      <div className='Editor'>
        <JsEditor value='// code' onChange={setCode} />
      </div>
      <Button raised={true} color='primary' onClick={runClicked}>
        Run
      </Button>
    </div>
  )
}

export default withState('code', 'setCode', '')(App)
