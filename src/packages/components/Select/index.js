import React, { Component } from "react"
import Select from "react-select"

import getDisplayName from "getDisplayName"

import "react-select/dist/react-select.min.css"

export const withAutoSelect = (WrappedSelect = Select) => class Wrapper extends Component {
  static displayName = `WithAuto${getDisplayName(WrappedSelect)}`
  state = {
    value: undefined
  }
  get value () {
    return this.state.value
  }

  componentDidMount () {
    const { inputRef, autoFocus } = this.props
    inputRef && inputRef(this)

    if (this.selectRef && this.selectRef.focus && autoFocus) {
      this.selectRef.focus()
    }
  }

  handleOnChange = (value) => {
    this.setState({
      value
    })
  }
  render () {
    const { inputRef, ...otherProps } = this.props
    return <WrappedSelect
      ref={ref => { this.selectRef = ref }}
      onChange={this.handleOnChange}
      closeOnSelect={!this.props.multi}
      value={this.state.value}
      noResultsText="No results found"
      {...otherProps} />
  }
}


export default Select
