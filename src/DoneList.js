import React, { Component } from 'react'

class DoneList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }
  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.props.doneItem}>
            <input
              placeholder="Task"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <button type="submit"> Done Task </button>
          </form>
        </div>
      </div>
    )
  }
}

export default DoneList