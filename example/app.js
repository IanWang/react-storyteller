import React from 'react'
import ReactDOM from 'react-dom'

import Storyteller from '../src'

const story = `/* 3 stages of total solar eclipse: */

.sun {
  display: block;
  width: 200px;
  height: 200px;
}

/* 1. Eclipse begins: */
.moon {
  left: -65%;
}

/* The Moon starts becoming visible over the Sun's disk */

/* 2. Totality and maximum eclipse: */
.moon {
  left: 0%;
}

/* The Moon completely covers the disk of the Sun. Only the Sun's corona is visible. */

/* 3. Eclipse ends: */
.moon {
  left: 130%;
}

/* The Moon stops overlapping the Sun's disk. */`

const App = () => {
  return (
    <div>
      <Storyteller story={story} speed={60}>
        <div className='sky'>
          <div className='sun' />
          <div className='moon' />
        </div>
      </Storyteller>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('mount')
)
