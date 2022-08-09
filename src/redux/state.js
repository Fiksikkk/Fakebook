let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, description: "Hi it`s my first post!", likesCount: 12 },
                { id: 2, description: "Yo wat`s up?", likesCount: 31 },
                { id: 3, description: "I`m hungry", likesCount: 21 },
                { id: 4, description: "kitty", likesCount: 3 },
            ],
            newPostText: 'New Post Text'
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
            ]
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

    addPost() {
        let newPost = {
            id: 5,
            description: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.postsData.unshift(newPost);
        this.updateNewPostText('');
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) { // { type: 'ADD-POST' } 
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 5,
                description: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postsData.unshift(newPost);
            this.updateNewPostText('');
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

};




export default store;
window.store = store;