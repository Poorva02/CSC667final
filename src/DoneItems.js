import React, { Component } from 'react'

class DoneItems extends Component {
  completedTasks = item => {
    return (
      <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
        {item.text}
      </li>
    )
  }
  render() {
    const doneEntries = this.props.entries
    const listItems = doneEntries.map(this.completedTasks)

    return <ul className="theList">{listItems}</ul>
  }
}

export default DoneItems