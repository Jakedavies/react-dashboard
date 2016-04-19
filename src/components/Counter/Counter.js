import React from 'react'

type Props = {
  classes: any,
  counter: number
};
export class Counter extends React.Component {
  props: Props;

  render () {
    return (
      <span className={this.props.classes['counter--green']}>{this.props.counter}</span>
    )
  }
}

export default Counter

