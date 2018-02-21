// action types
const SET_TAB = 'SET_TAB';

// default state
const defaultTab = 0;

// action creators
export const setTab = (tabNumber) => ({
  type: SET_TAB,
  tabNumber,
});

// thunks would go here if needed

// reducer
export default function (state = defaultTab, action) {
  switch (action.type) {
    case SET_TAB:
      return action.tabNumber;
    default:
      return state;
  }
}
