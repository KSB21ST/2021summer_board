import React, { useState, Component } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { rippleeditContent, rippleremoveContent } from '../modules/rippleReducer'
import { useHistory } from 'react-router-dom';
import RippleList from './RippleList'
import RippleForm from './RippleForm'
import board_reducer from '../modules/App_reducer';
 
function rippleContent() {
    const { rippleselectRowData } = useSelector(state => state.rippleReducer)
 
    const [title, setTitle] = useState(rippleselectRowData.title)
    const [content, setContent] = useState(rippleselectRowData.content)
    const [writer, setWriter] = useState(rippleselectRowData.writer)
 
    const dispatch = useDispatch()
    const history = useHistory();
 
    const onChange = () => {
        const _inputData = {
            id: selectRowData.id,
            title: title,
            content: content,
            writer: writer
        }
        // console.log('clickSave :: ', _inputData)
        dispatch(rippleeditContent(_inputData))
        setTitle('')
        setContent('')
        history.push('/')
    }
 
    const onRemove = () => {
        dispatch(rippleremoveContent(selectRowData.id))
        setTitle('')
        setContent('')
        history.push('/')
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleModal = (num) => {
        if(num == 0){
            handleDelete()
        }
        if(num == 1){
            handleModify();
        }
        if(num == 2){
            handleRipple()
        }
    }

    const handleDelete = () => {
        if(password == ori_passwd){
            onRemove();
        }
    }

    const handleModify = () => {
        if(password == ori_passwd){
            onChange();
        }else{
            setTitle('')
            setContent('')
            history.push('/')
        }
    }
 
    return(
        <div>
            <h2>상세보기</h2>
            <div>
                <div>
                    {title}
                </div>
                <div>
                   {content}
                </div>
                <div>
                   {writer}
                </div>
                <div>
                <RippleList/>
                </div>
            </div>
        </div>
    )
}
 
export default rippleContent;