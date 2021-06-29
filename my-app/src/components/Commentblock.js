import React from 'react';

export default function SingleTweet({tweet}){
    return(
        <div className='comments'>
            <div className='writer'>writer: {tweet.writer}</div>
            <div className='content'>context: {tweet.content}</div>
        </div>
    )
}