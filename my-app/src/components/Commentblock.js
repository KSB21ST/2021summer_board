import React from 'react';

export default function SingleTweet({comments}){
    return(
        <div className='comments'>
            <div className='writer'>writer: {comments.writer}</div>
            <div className='content'>context: {comments.content}</div>
        </div>
    )
}