import React from 'react';
import Commentblock from './Commentblock'
import { useSelector, useDispatch, Provider } from 'react-redux'
import '../App.css'
import { editContent, removeContent } from '../modules/boardReducer'

class Comments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments:[
                {
                    uuid: 1,
                    writer: "writer1",
                    content: " hello world "
                }
            ],
            _inputData: [
                {
                    id: '',
                    title: '',
                    content: '',
                    writer: '',
                    password: '',
                    ripples: [
                        {
                        writer: '',
                        content: ''
                        }
                    ]
                }
            ]
        }

        // this.useDispatch = this.useDispatch.bind(this);
        // this.dispatch = this.dispatch.bind(this);
        this.addTweet = this.addTweet.bind(this);
    }

    // dispatch = () => useDispatch()
    addTweet = () => {
        let value = document.querySelector('#new-tweet-content').value;
        let _writer = document.querySelector('#comment-writer').value;
        this.setState({comments: [...this.state.comments, {
            uuid: this.state.comments.length +1,
            writer: _writer,
            content: value
            // content: e.target.value
        }]})

        this.setState({_inputData: 
        [ ...this.state._inputData,
            {
                id: this.props.input.id,
                title: this.props.input.title,
                content: this.props.input.content,
                writer: this.props.input.writer,
                password: this.props.input.password,
                ripples: [
                    // ...this.props.input.ripples, 
                    this.state.comments
                ]
            }
        ]
        })
        console.log("_______")
        console.log(this.props.input.content)
        console.log(this.props.input.ripples)
        console.log(this.state._inputData)
        console.log("#########")
        this.props.dispatch(editContent(this.state._inputData))
    }
    render(){
        // const comments = this.props.ripples;
        return(
            <div id="root">
                <div>
                    <div id="writing-area">
                        <input placeholder="name" id="comment-writer"/>
                        <input placeholder="comment" id="new-tweet-content"></input>
                        <button id="submit-new-tweet" onClick={this.addTweet}>comment</button>
                    </div>
                    {/* <ul id="inputs" clasName="comments">
                        {
                            this.props.ripples.map(tweet=>{
                                return <Commentblock key={tweet.uuid} tweet={tweet} />
                            })
                        }
                    </ul> */}
                    <ul id="comments" clasName="comments">
                        {
                            this.state.comments.map(comment=>{
                                return <Commentblock key={comment.uuid} comments={comment} />
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Comments;