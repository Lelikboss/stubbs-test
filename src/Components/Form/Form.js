import { useState } from "react";
import { useDispatch } from "react-redux";
import messagesActions from "../../redux/message/action";
import s from './Form.module.css'
import sendIcon from '../../icons/sendIcon.png'
const Form = () => {
    const [message, setMessage] = useState('')
    const dispath = useDispatch()
    const handleChange = e => setMessage(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault()
        dispath(messagesActions.sendMessage(message))
        setMessage('')
    }
    console.log(message);
    return (
        <>
        <form className={s.form} onSubmit={handleSubmit}>
            <input className={s.input} value={message} onChange={handleChange} autoComplete="off" placeholder="type text" type='text'/>
            <button disabled={message === "" && true} className={s.button}>
                <img className={s.img} alt='icon send' src={sendIcon}/>
            </button> 
        </form>
        </>
    )
}
export default Form