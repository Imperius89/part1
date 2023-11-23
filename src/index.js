import React from 'react'
import ReactDOM from 'react-dom'
import {useState} from 'react'

const App = () => {
  const [value, setValue] = useState(10)

  return (
    <div>
      {value}
      <button onClick={value + 1}>button</button>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root')) 