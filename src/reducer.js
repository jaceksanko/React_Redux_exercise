import { combineReducers } from 'redux';
import comments from './comments.js';
import users from './users.js';

const reducer = combineReducers({ //funkcja pomocnicza Reduxa pozwalająca w prostrzy sposób łączyć ze sobą reduktory
    comments,
    users
});

export default reducer