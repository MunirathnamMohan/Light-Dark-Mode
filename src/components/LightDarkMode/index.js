import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isClicked: true}

  clicked = () => {
    const {isClicked} = this.state
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked} = this.state

    return (
      <div className="bg-container">
        {isClicked ? (
          <div className="bg-light-container">
            <h1 className="header">Click to Change the Mode</h1>
            <button className="button" onClick={this.clicked} type="submit">
              Dark Mode
            </button>
          </div>
        ) : (
          <div className="bg-dark-container">
            <h1 className="header-dark">Click to Change the Mode</h1>
            <button className="button" onClick={this.clicked} type="submit">
              Light Mode
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default LightDarkMode
