import React, { PureComponent } from 'react'

export default class Logo extends PureComponent {
  render() {
    return (
      <div className="logo">
        <center><img src="http://[::1]:3001/logo.gif" alt="logo"/>
        </center>
      </div>
    )
  }
}
