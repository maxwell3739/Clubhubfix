import { createStore } from 'redux';
import makeuserReducer from '../reducers/userReducer';

export default function configureStore(initialState) {
    return createStore(
        makeuserReducer,
        initialState
    );
}
