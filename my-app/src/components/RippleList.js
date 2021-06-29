import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { rippleselectRow } from '../modules/rippleReducer'
 
function RippleList() {
    const {inputData} = useSelector(state => state.rippleReducer)
    const {lastId} = useSelector(state => state.rippleReducer)
 
    const dispatch = useDispatch();
 
    const selectContent = (id) => {
        dispatch(rippleselectRow(id))
    }
 
    return(
        <div>
        <table className='listTable'>
            <tbody>
                <tr>
                    <td className='listTableIndex th'>index</td>
                    <td className='listTableIndex th'>writer</td>
                    <td className='listTableTitle th'>title</td>
                    <td className='listTableContent th'>content</td>
                </tr>
                {lastId !== 0 ?
                    inputData.map(rowData => (
                        rowData.id !== '' &&
                        <tr>
                            <td className='listTableIndex' onClick={() => selectContent(rowData.id)}>
                            {rowData.id}
                            </td>
                            <td className='listTableWriter' onClick={() => selectContent(rowData.id)}>
                            {rowData.writer}
                            </td>
                            <td className='listTableTitle' onClick={() => selectContent(rowData.id)}>
                            {rowData.title}
                            </td>
                            <td className='listTableContent' onClick={() => selectContent(rowData.id)}>
                            {rowData.content}
                            </td>
                        </tr>
                    )) : 
                    <tr>
                        <td className='listTableIndex'></td>
                        <td className='listTableWriter'></td>
                        <td className='listTableContent'></td>
                        <td className='listTableTitle noData'>작성된 글이 없습니다.</td>
                    </tr>
                }
            </tbody>
        </table>
        </div>
    )
}
 
export default RippleList;