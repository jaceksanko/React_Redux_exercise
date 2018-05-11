import uuid from 'uuid';

const   ADD_COMMENT = 'ADD_COMMENT',
        EDIT_COMMENT = 'EDIT_COMMENT',
        DEL_COMMENT = 'DEL_COMMENT',
        THUMB_UP_COMMENT = 'RATING_COMMENT_UP',
        THUMB_DOWN_COMMENT = 'RATING_COMMENT_DOWN';

              
//kreator akcji
function addComment(text) {
    return { //akcja
        type: ADD_COMMENT,
        text: text,
        id: uuid.v4()
    }
};

function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text: text,
        id: id,
        key: id

    }
};

function delComment(id) {
    return {
        type: DEL_COMMENT,
        id
    }
};

function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id
    }
};

function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id
    }
};

export {ADD_COMMENT, EDIT_COMMENT, DEL_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT};
export {addComment, editComment, delComment, thumbUpComment, thumbDownComment};
