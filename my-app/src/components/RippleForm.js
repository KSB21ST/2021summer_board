import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rippleSave } from '../modules/rippleReducer';
import { dataSave } from '../modules/boardReducer';
import { useHistory } from 'react-router-dom';
 
function RippleNew() {
    const { selectRowData } = useSelector(state => state.boardReducer)

    const [r_writer, setRWriter] = useState('')
    const [r_content, setRContent] = useState('')

    const dispatch = useDispatch();
 
    const onSave = () => {
        const _inputData = {
            id: selectRowData.id,
            title: selectRowData.title,
            content: selectRowData.content,
            writer: selectRowData.writer,
            password: selectRowData.password,
            // ripples: [
            //     // ...selectRowData.ripples,
            //     {
            //         writer: r_writer,
            //         content: r_content
            //     }
            // ]
            // ripples: selectRowData.ripples.concat({
            //     writer: r_writer,
            //     content: r_content
            // })
            }
        // dispatch(dataSave(_inputData))
    }

    const handleWriter = (e) => {
        setRWriter(e.target.value)
    }

    const handleContent = (e) => {
        setRContent(e.target.value)
    }
 
    return(
        <div>
            <input placeholder="name" name="brdwriter" value={r_writer} onChange={handleWriter} />
            <input placeholder="내용을 입력하세요" className="texteditor" name ="brdcontext" value={r_content} onChange={handleContent} />
            <button onClick={onSave}>댓글달기</button>
        </div>
    )
}
 
export default RippleNew;
