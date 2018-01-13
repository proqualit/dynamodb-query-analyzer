import * as React from 'react'
import './App.css'
import JsEditor from './JsEditor'
import { Button } from 'material-ui'
import { withState, compose } from 'recompose'
// import { executeScript } from '../lib/execute-script'
import Header from './Header'
import LogOutput from './LogOutput'

interface AppProps {
  code: string,
  setCode: (code: string) => string,
  logs: string[],
  setLogs: (fn: (logEntrys: string[]) => string[]) => string[]
}

const App: React.SFC<AppProps> = ({ code, setCode, logs, setLogs }) => {
  // const log = (logEntry: string) => {
  //   setLogs((existingEntries: string[]) => {
  //     return [...existingEntries, logEntry]
  //   })
  // }
  const runClicked = () => {
    // fetch('/api/hello')
    //   .then(res => res.json())
    //   .then(json => console.log('response', json))
    // console.log('run clicked!', code)
    // const context = {
    //   log
    // }
    // const result = executeScript(code, context)
    // console.log('result', result)
  }

  return (
    <div className='App'>
      <Header />
      <div className='Editor'>
        <JsEditor value='// code' onChange={setCode} />
      </div>
      <Button raised={true} color='primary' onClick={runClicked}>
        Run
      </Button>
      <LogOutput logEntries={logs} />
    </div>
  )
}

export default compose(
  withState('code', 'setCode', ''),
  withState('logs', 'setLogs', [])
)(App)
