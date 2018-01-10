import * as React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import * as CodeMirror from 'react-codemirror'
import './JsEditor.css'

console.log('codemirror', CodeMirror)

export default function () {
  const options = {
    lineNumbers: true,
    mode: 'javascript'
  }
  return (
    <div className='JsEditor'>
      <CodeMirror options={options} />
    </div>
  )
}
