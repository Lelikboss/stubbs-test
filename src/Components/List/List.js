import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux"
import messagesActions from "../../redux/message/action"
import { getMessages } from "../../redux/message/selectors"
import s from './List.module.css'
const List = () => {
    const messagesEndRef = useRef(null)

    
    const messages = useSelector(getMessages)
    const dispath = useDispatch()
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
      }
    
    useEffect(() => {
    scrollToBottom()
    }, [messages]);
    return (
        <>
        <ul  className={s.list}>
            {messages.map(e =>{ 
           return <li ref={messagesEndRef} className={s.item} 
                style={{cursor: 'pointer'}} 
                key={e.id} onClick={()=> dispath(messagesActions.deleteMesssage(e.id))} >
                <p className={s.text}>{e.text}</p> <span className={s.span}>{e.time}</span>
            </li>})}
        </ul>
        </>
    )
}
export default List