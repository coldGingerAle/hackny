import React, { Component } from 'react';
import { Transition } from 'react-transition-group'
import Styles from './Styles'

export default class BlandFade extends Component {
  render() {
    return(
      <Transition in={this.props.show} timeout={this.props.delay || 300}>
        {(state) => (
          <div style={{
            ...Styles.BlandFade.defaultStyle,
            ...Styles.BlandFade.experiment(this.props.increment)[state]
          }}>
            {this.props.children}
          </div>
        )}
      </Transition>
    )
  }
}
