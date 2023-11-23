import React from 'react'
import ReactDOM from 'react-dom'
import {useState} from 'react'

const App = () => {
  const [value, setValue] = useState(10)

  return (
    <div>
      {value}
      <button onClick={() => console.log('clicked the button')}>
        button
      </button>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root')) 