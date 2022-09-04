import React from "react";
import { updateMessageTextActionCreater, sendMessageActionCreater } from "../../../redux/messagesReducer";
import Messages from "./Messages";
import { connect } from "react-redux";


// const MessagesContainer = (props) => {

//     return <StoreContext.Consumer>
//         { store => {
//                 let data = store.getState().messagesPage;
//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageActionCreater());
//                 }
//                 let onNewMessageChange = (text) => {
//                     store.dispatch(updateMessageTextActionCreater(text))
//                 }

//                 return <Messages
//                     updateNewMessageText={onNewMessageChange}
//                     sendMessage={onSendMessageClick}
//                     data={data}
//                 />
//             }
//         }
//     </StoreContext.Consumer>
// }


let mapStateToProps = (state) => {
    return {
        data: state.messagesPage
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