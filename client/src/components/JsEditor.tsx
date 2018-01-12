import * as React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import * as CodeMirror from 'react-codemirror'
import './JsEditor.css'

interface JsEditorProps {
  value: string,
  onChange: (newValue: string) => string
}

const JsEditor: React.SFC<JsEditorProps> = ({ value, onChange }) => {
  // CodeMirror does not like it when you pass a function with an optional callback
  // as the second parameter.
  const onChange$ = (code: string) => onChange(code)

  const options = {
    lineNumbers: true,
    mode: 'javascript'
  }
  return (
    <div className='JsEditor'>
      <CodeMirror options={options} value={value} onChange={onChange$} />
    </div>
  )
}

export default JsEditor
