import React from "react";
import s from './Messages.module.css';
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


const Messages = (props) => {

    let dialogsElements = props.data.dialogsData
        .map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
    let messagesElements = props.data.messagesData
        .map(m => <Message message={m.message}/>);


    let newMessageElement = React.createRef();
    let NewMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={newMessageElement}></textarea>
                <button onClick={NewMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Messages;