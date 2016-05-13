export function setAllPodcasts (state, podcasts) {
  return state.set('podcasts', podcasts)
}
export function setMyPodcasts (state, podcasts) {
  return state.set('mPodcasts', podcasts)
}
export function savePodcast (state, podcast) {
  return state.push('mPodcasts', podcast)
}