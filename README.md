react-storyteller
===========

Tell your story with CSS. Let your imagination fly.

**[DEMO](http://ianwang.me/react-storyteller/example/index.html)**

## Installation
```shell
npm install react-storyteller
```

## Basic Use

```jsx
import React from 'react';
import Storyteller from 'react-storyteller'
const story = `
h1 {
  color: red;
}
`

class App extends React.Component ({
  render() {
    <Storyteller story={story} speed={50}>
      <h1>HI</h1>
    </Storyteller>
  }
})
```

