import combineChanges from "./combineChanges";

const applyHandler = (handlers, action, state) =>
  handlers.hasOwnProperty(action.type)
    ? Array.isArray(handlers[action.type])
      ? combineChanges(handlers[action.type])(state, action)
      : handlers[action.type](state, action)
    : state;

export default (initialState, handlers) => (state = initialState, action) =>
  applyHandler(handlers, action, state);
