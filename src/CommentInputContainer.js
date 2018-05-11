import {connect} from 'react-redux';
import CommentInput from './CommentInput';
import { addComment } from './actions'

const mapDispatchToProps = dispatch => ({
    addComment: (text) => dispatch(addComment(text)),
});

export default connect(null, mapDispatchToProps)(CommentInput);