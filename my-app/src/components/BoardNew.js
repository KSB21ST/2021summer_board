import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { dataSave } from '../modules/boardReducer';
import { uriSave } from '../modules/uriReducer'
import { useHistory } from 'react-router-dom';
import '../App.css'
 
function BoardNew() {
    const [title, setTitle] = useState('')
    const [writer, setWriter] = useState('')
    const [content, setContent] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();
    
    const history = useHistory();
 
    const onSave = () => {
        const _inputData = {
            id: '',
            title: title,
            content: content,
            writer: writer,
            password: password,
            ripples: [{
                r_writer:'',
                r_content:''
            }]
        }
        dispatch(dataSave(_inputData))
        setTitle('')
        setContent('')
        setWriter('')
        setPassword('')
        history.push('/')
        dispatch(uriSave('/'))
    }
 
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleWriter = (e) => {
        setWriter(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
 
    const handleContent = (e) => {
        setContent(e.target.value)
    }
 
    return(
        <div>
            <h2>글 작성</h2>
            <div>
                <div>
                    <input type='text' className='inputTitle' placeholder='제목을 입력하세요' onChange={handleTitle} value={title} />
                    <div className='writername'>
                    <tr>
                    <input type='text' className='inputWriter' placeholder='이름' onChange={handleWriter} value={writer} />
                    <input type='text' className='inputPassword' placeholder='비밀번호' onChange={handlePassword} value={password} />
                    </tr>
                    </div>
                </div>
                <div>
                    <textarea className='inputContent' placeholder='내용을 입력하세요' onChange={handleContent} value={content} />
                </div>
                <div>
                    <button type='button' onClick={onSave}>submit</button>
                </div>
            </div>
        </div>
    )
}
 
export default BoardNew;