const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const messagesReducer = (state, action) => {
    switch(action.type) {
    case SEND_MESSAGE:
        let newMessage = {
            message: state.newMessageText
        }
        state.messagesData.push(newMessage);
        state.newMessageText = '';
        return state;
    case UPDATE_MESSAGE_TEXT: 
        state.newMessageText = action.newMessageText;
        return state;
    default:
        return state;
    }
}

export const sendMessageActionCreater = () => ({type: SEND_MESSAGE});
export const updateMessageTextActionCreater = (text) =>
    ({type: UPDATE_MESSAGE_TEXT, newMessageText: text});

export default messagesReducer;