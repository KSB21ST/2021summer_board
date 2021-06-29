import React from 'react';
import Commentblock from './Commentblock'
import '../App.css'

class Twittler extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tweets:[
                {
                    uuid: 1,
                    writer: "writer1",
                    content: " hello world "
                }
            ]
        }
        this.addTweet = this.addTweet.bind(this);
    }
    addTweet = (e) => {
        let value = document.querySelector('#new-tweet-content').value;
        let writer = document.querySelector('#comment-writer').value;
        this.setState({tweets: [...this.state.tweets, {
            uuid: this.state.tweets.length +1,
            writer: writer,
            content: value
            // content: e.target.value
        }]})
    }
    render(){
        return(
            <div id="root">
                <div>
                    <div id="writing-area">
                        <input placeholder="name" id="comment-writer"/>
                        <input placeholder="comment" id="new-tweet-content"></input>
                        <button id="submit-new-tweet" onClick={this.addTweet}>comment</button>
                    </div>
                    <ul id="tweets" clasName="comments">
                        {
                            this.state.tweets.map(tweet=>{
                                return <Commentblock key={tweet.uuid} tweet={tweet} />
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Twittler;