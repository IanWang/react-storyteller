import { Component } from 'react'
import PropTypes from 'prop-types'

class Storyteller extends Component {

  constructor(props) {
    super(props)
    this.state = {
      story: ''
    }
  }

  componentDidMount() {
    this._generateStory()
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
    let { storyNarrative } = this.props

    const MAX = 500 // prevent infinite loop...
    let display = ''
    let tryTime = 0
    let that = this

    return function getText(index) {

      if(display.length < storyNarrative.length && tryTime < MAX) {
        tryTime ++

        let newChar = storyNarrative.charAt(index)
        display += newChar

        that.setState({ story: display })
        return setTimeout(() => getText(index + 1), 30)
      }
    }
  }
}

Storyteller.propType = {
  storyNarrative: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Storyteller


