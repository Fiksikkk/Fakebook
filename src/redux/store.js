import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";


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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
    }

};

 



export default store;
window.store = store;