/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Podcast from './../../components/Podcast/Podcast'
import Search from './../../components/Search/Search'

// We can use Flow (http://flowtype.org/) to type our component's props
// and state. For convenience we've included both regular propTypes and
// Flow types, but if you want to try just using Flow you'll want to
// disable the eslint rule `react/prop-types`.
// NOTE: You can run `npm run flow:check` to check for any errors in your
// code, or `npm i -g flow-bin` to have access to the binary globally.
// Sorry Windows users :(.
type Props = {
  podcasts: Array,
};

// We avoid using the `@connect` decorator on the class definition so
// that we can export the undecorated component for testing.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
export class HomeView extends React.Component<void, Props, void> {
  static propTypes = {
    podcasts: PropTypes.array.isRequired
  };
  podcasts = this.props.podcasts.map((podcast) =>
    <Podcast {...podcast} />
  );
  render () {
    return (
      <div>
        <div className='container text-center'>
          {this.podcasts}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  podcasts: state.podcasts
})
export default connect((mapStateToProps), {
})(HomeView)
