import * as React from 'react'
import './LogOutput.css'

interface LogOutputProps {
  logEntries: string[]
}

const LogOutput: React.SFC<LogOutputProps> = ({ logEntries }) => {
  return (
    <div className='LogOutput'>
      {logEntries.map((entry: string, i) => (<pre key={i}>{entry}</pre>))}
    </div>
  )
}

export default LogOutput
