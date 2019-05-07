import React, { Component } from 'react'
import { connect } from 'react-redux'

export class App extends Component {
  render() {
    return (
      <div id="calculator" className="calculator">
        <div className="calculator__results">0</div>
        <div className="calculator__keypad">
            <button>AC</button>
            <button>+/−</button>
            <button>%</button>
            <button>9</button>
            <button>8</button>
            <button>7</button>
            <button>6</button>
            <button>5</button>
            <button>4</button>
            <button>3</button>
            <button>2</button>
            <button>1</button>
            <button>0</button>
            <button>.</button>
            <button>÷</button>
            <button>×</button>
            <button>−</button>
            <button>+</button>
            <button>=</button>
        </div>
      </div>
    )
  }
}

export default connect()(App)
