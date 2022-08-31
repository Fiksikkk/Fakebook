import React from "react";
import s from './Messages.module.css';
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import { updateMessageTextActionCreater } from "../../../redux/state";
import { sendMessageActionCreater } from "../../../redux/state";

const Messages = (props) => {

    let dialogsElements = props.data.dialogsData
        .map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} />);
    let messagesElements = props.data.messagesData
        .map(m => <Message message={m.message} />);

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreater());
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateMessageTextActionCreater(text);
        props.dispatch(action);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea
                    ref={newMessageElement}
                    onChange={onMessageChange}
                    value={props.data.newMessageText}
                    placeholder='Write your message here'>
                </textarea>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Messages;