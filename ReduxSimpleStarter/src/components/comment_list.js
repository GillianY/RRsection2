import React from 'react'
import  {connect} from 'react-redux';

//no state -> functional component

const CommentList = (props)=>{
    const list = props.comments.map(comment => <li key={comment}>{comment}</li>);
    return (
        <ul className="comment-list">{list}</ul>
    );
}

function mapStateToProps(state){ //not yet create the reducer : comment
    return { comments: state.comments};
} 

export default connect(mapStateToProps)(CommentList);