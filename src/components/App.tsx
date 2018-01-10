import * as React from 'react'
import './App.css'
import JsEditor from './JsEditor'

export default function () {
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
