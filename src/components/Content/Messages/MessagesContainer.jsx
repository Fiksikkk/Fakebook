import React from "react";
import { updateMessageTextActionCreater, sendMessageActionCreater } from "../../../redux/messagesReducer";
import Messages from "./Messages";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
    return {
        data: state.messagesPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateMessageTextActionCreater(text))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreater());
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;