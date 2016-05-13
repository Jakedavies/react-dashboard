
const initialState = [{
  name: 'Shoptalk Show',
  image: '/shoptalk.png',
  description: 'An internet radio show about the internet starring Dave Rupert and Chris Coyier.'
}, {
  name: 'Tim Ferris Show',
  image: '/timferris.jpeg',
  description: 'Tim Ferriss is a self-experimenter and bestselling author, best known for The 4-Hour Workweek.'
}]
export default function podcastReducer (state: podcasts = initialState, action: Action): number {
  return state
}
