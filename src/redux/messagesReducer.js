import avatar from "../assets/Images/avatarForMessage.jpg"

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        { id: 1, name: "Sasha", avatar: avatar },
        { id: 2, name: "Pasha", avatar: avatar },
        { id: 3, name: "Kryaken", avatar: avatar }
    ],
    messagesData: [
        { id: 1, message: "HI!" },
        { id: 2, message: "How are you" },
        { id: 3, message: "Yo" }
    ],
    newMessageText: ''
}
const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let text = state.newMessageText;
            let newId = state.messagesData.length + 1;
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, {id: newId, message: text }]
            }
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessageText
            }
        default:
            return state;
    }
}

export const sendMessageActionCreater = () => ({ type: SEND_MESSAGE });
export const updateMessageTextActionCreater = (text) =>
    ({ type: UPDATE_MESSAGE_TEXT, newMessageText: text });

export default messagesReducer;