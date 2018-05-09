import { ADD_NOTE, VIEW_NOTES, DELETE_NOTE, EDIT_NOTE } from '../actions';

const defaultState = {
  notes: []
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case ADD_NOTE:
        return Object.assign({}, state, {notes: [...state.notes, action.payload]});
    case VIEW_NOTES:
        return state;
    case DELETE_NOTE:
        return Object.assign({}, state, {notes: state.notes.splice(action.payload, 1)});
    case EDIT_NOTE:
        console.log("Inside Edit");
        console.log(action.payload);
        return Object.assign({}, state, {notes: state.notes.splice(action.payload.id, 1,
                                                action.payload.note)})
    default:
        return state
  }
}

export default reducer;