import React from 'react'

type Props = {
  search: 'function'
};
export class Podcast extends React.Component {
  props: Props;
  
  render () {
    return (
      <div className='search'>
        <input ></input>
        <button onClick={() => this.props.search(entry)}>Search</button>
      </div>
    )
  }
}

export default Podcast

