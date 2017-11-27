import {createStore, compse} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

// impor tthe root reducer
import rootReducer from './reducers/index';

// default data
import comments from './data/comments';
import posts from './data/posts';

// create and object for the default data

const defaultState = {
    posts,
    comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
