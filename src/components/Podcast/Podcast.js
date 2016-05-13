import React from 'react'

type Props = {
  name: string,
  description: string,
  image: string
};
export class Podcast extends React.Component {
  props: Props;

  render () {
    return (
      <div className='podcast-description'>
        <h3>{this.props.name}</h3>
        <span>{this.props.description}</span>
        <img src={this.props.image}/>
      </div>
    )
  }
}

export default Podcast

