import React from "react";
import { updateMessageTextActionCreater, sendMessageActionCreater} from "../../../redux/messagesReducer";
import Messages from "./Messages";


const MessagesContainer = (props) => {
    let data = props.store.getState().messagesPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreater());
    }
    let onNewMessageChange = (text) => {
        props.store.dispatch(updateMessageTextActionCreater(text))
    }

    return (
        <Messages
            updateNewMessageText={onNewMessageChange}
            sendMessage={onSendMessageClick}
            data={data}
        />
    )
}

export default MessagesContainer;