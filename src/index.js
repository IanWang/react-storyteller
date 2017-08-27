import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Storyteller extends Component {

  constructor(props) {
    super(props)
    this.state = {
      story: ''
    }
  }

  componentDidMount() {
    const story = this._generateStory()
    story()
  }

  render() {
    let { story } = this.state
    let { children } = this.props

    return (
      <div className='app'>
        <div>
          { children }
        </div>
        <style dangerouslySetInnerHTML={{__html: story}} />
        <div style={{ whiteSpace: 'pre-line' }}>{ story }</div>
      </div>
    )
  }

  _generateStory() {
    let { narrative } = this.props

    const MAX = 500 // prevent infinite loop...
    let display = ''
    let tryTime = 0
    let that = this

    return function renderText(index = 0) {

      if(display.length < narrative.length && tryTime < MAX) {
        tryTime ++

        let newChar = narrative.charAt(index)
        display += newChar

        that.setState({ story: display })
        return setTimeout(() => renderText(index + 1), 30)
      }
    }
  }
}

Storyteller.propType = {
  narrative: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Storyteller


