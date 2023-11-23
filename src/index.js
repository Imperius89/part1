import React from 'react'
import ReactDOM from 'react-dom'
import {useState} from 'react'

const App = () => {
  const [value, setValue] = useState(10)

  const handleClick = () =>
    console.log('clicked the button')

  return (
    <div>
      {value}
      <button onClick={handleClick}>button</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root')) 