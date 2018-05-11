import uuid from 'uuid';

const   ADD_COMMENT = 'ADD_COMMENT';
        /* EDIT_COMMENT = 'EDIT_COMMENT',
        DEL_COMMENT = 'DEL_COMMENT',
        THUMB_UP_COMMENT = 'RATING_COMMENT_UP',
        THUMB_DOWN_COMMENT = 'RATING_COMMENT_DOWN'; */

              
//kreator akcji
function addComment(text) {
    return { //akcja
        type: ADD_COMMENT,
        text: text,
        id: uuid.v4()
    }
};
/* 
function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
};

function delComment(id) {
    return {
        type: DEL_COMMENT,
        id
    }
}; */

/* function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id,
        votes: votes + 1
    }
};

function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        votes: votes - 1
    }
}; */

export {ADD_COMMENT};
export {addComment};
