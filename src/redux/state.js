const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, description: "Hi it`s my first post!", likesCount: 12 },
                { id: 2, description: "Yo wat`s up?", likesCount: 31 },
                { id: 3, description: "I`m hungry", likesCount: 21 },
                { id: 4, description: "kitty", likesCount: 3 },
            ],
            newPostText: ''
        },
        messagesPage: {
            dialogsData: [
                { id: 1, name: "Sasha", avatar: `https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg` },
                { id: 2, name: "Pasha", avatar: `https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg` },
                { id: 3, name: "Kryaken", avatar: `https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg` }
            ],
            messagesData: [
                { message: "HI!" },
                { message: "How are you" },
                { message: "Yo" }
            ],
            newMessageText: ''
        }
    },

    _callSubscriber() {
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    
    dispatch(action) { // { type: 'ADD-POST' } 
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                description: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postsData.unshift(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                message: this._state.messagesPage.newMessageText
            }
            this._state.messagesPage.messagesData.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.newMessageText;
            this._callSubscriber(this._state);
        }

    }

};

export const addPostActionCreater = () => ({type: ADD_POST});

export const updateNewPostTextActionCreater = (text) => 
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });   

export const sendMessageActionCreater = () => ({type: SEND_MESSAGE});

export const updateMessageTextActionCreater = (text) =>
    ({type: UPDATE_MESSAGE_TEXT, newMessageText: text});

export default store;
window.store = store;