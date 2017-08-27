import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Storyteller extends Component {

  constructor(props) {
    super(props)
    this.state = {
      storyDisplay: ''
    }
  }

  componentDidMount() {
    this._displayStory()
  }

  render() {
    let { storyDisplay } = this.state
    let { children } = this.props

    return (
      <div className='react-storyteller'>
        <div className='react-storyteller__template'>
          { children }
        </div>

        <div
          className='react-storyteller__story'
          style={{ whiteSpace: 'pre-wrap' }}>
          <style
            dangerouslySetInnerHTML={{__html: storyDisplay}} />
          { storyDisplay }
        </div>
      </div>
    )
  }

  _displayStory() {
    let { story, speed } = this.props

    let storyDisplay = ''

    const renderText = (index = 0) => {

      if(storyDisplay.length < story.length) {

        let newChar = story.charAt(index)
        let nextChar = index + 1
        storyDisplay += newChar

        this.setState({ storyDisplay })

        setTimeout(() => renderText(nextChar), speed)
      }
    }

    renderText()
  }
}

Storyteller.propType = {
  story: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  speed: PropTypes.number.isRequired
}

Storyteller.defaultProps = {
  speed: 40
}

export default Storyteller


