import React from 'react'
import ReactDOM from 'react-dom'

import Storyteller from '../src'

const story = `
h1 {
  font-size: 3em;
  color: red;
}`

const App = () => {
  return (
    <div>
      <Storyteller story={story}>
        <h1>HI</h1>
      </Storyteller>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('mount')
)
