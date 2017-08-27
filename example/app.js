import React from 'react'
import ReactDOM from 'react-dom'

import Storyteller from '../src'

const narrative = `
h1 {
  font-size: 2em;
  color: red;
}
`

const App = () => {
  return (
    <div>
      <Storyteller narrative={narrative}>
        <h1>HI</h1>
      </Storyteller>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('mount')
)
