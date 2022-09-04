const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        { id: 1, description: "Hi it`s my first post!", likesCount: 12 },
        { id: 2, description: "Yo wat`s up?", likesCount: 31 },
        { id: 3, description: "I`m hungry", likesCount: 21 },
        { id: 4, description: "kitty", likesCount: 3 },
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                description: state.newPostText,
                likesCount: 0
            };
            let stateCopy = { ...state };
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.unshift(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default: {
            return state;
        }
    }
}

export const addPostActionCreater = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreater = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;