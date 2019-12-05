export default changes => (curState, action) => changes.reduce((state, reducer) => reducer(state, action), curState);
