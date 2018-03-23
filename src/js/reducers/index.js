import {GET_DATA} from '../actions/mainActions';

const initialState = {
    feeds: []
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return Object.assign({}, state, {
                feeds: state.feeds.concat(action.feeds)
            });

        default:
            return state;
    }
};

export default mainReducer;
