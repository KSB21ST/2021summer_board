import React, { useState, Component } from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux'
import { editContent, removeContent } from '../modules/boardReducer'
import { rippleeditContent, rippleremoveContent } from '../modules/rippleReducer'
import { useHistory } from 'react-router-dom';
import Modal from '../components/Modal'
import RippleForm from './RippleForm'
import RippleList from './RippleList';
import Comments from './Comments';
 
function BoardContent() {
    // const { rippleselectRowData } = useSelector(state => state.rippleReducer)
    const { selectRowData } = useSelector(state => state.boardReducer)
 
    const [title, setTitle] = useState(selectRowData.title)
    const [content, setContent] = useState(selectRowData.content)
    const [ori_passwd, setOriPsswd] = useState(selectRowData.password)
    const [writer, setWriter] = useState(selectRowData.writer)
    const [ripples, setRipples] = useState(selectRowData.ripples)
    const [modalOpen, setModalopen] = useState(false)
    const [password, setPassword] = useState("")
    const [buttonname, setButton] = useState("")
    const [mode, setMode] = useState(1)
    const [original, setOriginal] = useState("")
    const [ripple, setRipple] = useState("")

    // const [r_title, setRTitle] = useState(rippleselectRowData.title)
    // const [r_content, setRContent] = useState(rippleselectRowData.content)
    // const [r_writer, setRWriter] = useState(rippleselectRowData.writer)
 
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
 
    const handleContent = (e) => {
        setOriginal(content)
        setContent(e.target.value)
    }
 
    const dispatch = useDispatch()
    const history = useHistory();
 
    const onChange = () => {
        const _inputData = {
            id: selectRowData.id,
            title: title,
            content: content,
            writer: writer,
            password: ori_passwd,
            ripples: ripples
        }
        // console.log('clickSave :: ', _inputData)
        dispatch(editContent(_inputData))
        setTitle('')
        setContent('')
        history.push('/')
    }

    const inputData_ = {
        id: selectRowData.id,
        title: title,
        content: content,
        writer: writer,
        password: ori_passwd,
        ripples: ripples
    }
 
    const onRemove = () => {
        dispatch(removeContent(selectRowData.id))
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
        closeModal()
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

    const handleRipple = (e) => {
        setRipple(e.target.value)
    }

    const openModal = (num) => {
        setModalopen(true)
        if(num == 0){
            setButton("delete");
            setMode(0);
        }
        if(num == 1){
            setButton("modify");
            setMode(1);
        }
        if(num == 2){
            setButton("ripple");
            setMode(2);
        }
       
    }
    const closeModal = () => {
        setModalopen(false)
    }
 
    return(
        <div>
            <h2>상세보기</h2>
            <div>
                <div>
                    <input type='text' className='inputTitle' onChange={handleTitle} value={title} />
                </div>
                <div>
                    <textarea className='inputContent' onChange={handleContent} value={content} />
                </div>
                <div>
                    {/* <button type='button' onClick={onChange} className='editBtn'>edit</button>
                    <button type='button' onClick={onRemove} className='deleteBtn'>delete</button> */}
                    <React.Fragment>
                    <button className='deleteBtn' onClick={ () => openModal(0) }> delete </button>
                    <button className='editBtn' onClick={ () => openModal(1) }> edit </button>
                    {/* <button className='rippleBtn' onClick={ () => openModal(2) }> ripple </button> */}
                    <Modal open={ modalOpen } close={ closeModal } title="Create a chat room">
                    <div>
                    비밀번호를 입력하세요.
                    <input classname = "title-input" name="password" value={password} onChange={handlePassword} />
                    <button onClick={() => handleModal(mode)}>{buttonname}</button>
                    {
                        password == ori_passwd 
                        ? (<div>correct</div>)
                        : (<div>wrong</div>)
                    }
                    </div>
                    </Modal>
                    </React.Fragment>
                </div>
                <div className="commentblock">
                    {/* <input type='text' className='inputRipple' placeholder='댓글을 입력하세요' onChange={handleRipple} value={ripple} />
                    <button className='rippleBtn' onClick={ () => handleRipple }> ripple </button> */}
                    {/* <RippleForm /> */}
                    <Comments input={inputData_} dispatch={dispatch}/>
                </div>
            </div>
        </div>
    )
}
 
export default BoardContent;