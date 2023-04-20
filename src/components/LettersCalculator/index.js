import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputText: ''}

  onChangeLettersCount = event => {
    const newText = event.target.value
    this.setState({inputText: newText})
  }

  render() {
    const {inputText} = this.state
    const count = inputText.length
    return (
      <div className="app-container">
        <div className="bg-container">
          <div className="count-container">
            <h1 className="heading">CalCulate the Letters you enter</h1>
            <label className="label-text" htmlFor="userInput">
              Enter the phrase
            </label>
            <input
              type="text"
              placeholder="Enter the phrase"
              id="userInput"
              onChange={this.onChangeLettersCount}
              className="user-input"
            />
            <p className="count">No.of letters: {count}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="img"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
