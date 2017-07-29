import { createStore } from 'redux'

const makeuserReducer = (state = {clubName: 'CommerceClub'}, action) => { //can't mutate the state
    switch(action.type) {
      case 'USER':
        return action.data //grabs from the dispatch
      default:
          return state;
    }
};


export default makeuserReducer;
