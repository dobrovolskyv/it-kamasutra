const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Hi, i'm a beautifull", likesCount: 123 },
        { id: 2, message: "LIKE A BOSS, BITCH", likesCount: 189999 },
        { id: 3, message: "LIKE A BOSS", likesCount: 189 },
        { id: 4, message: "I wanna eat", likesCount: 1 },
      ],
      newPostText: "Ti vse smojesh!",
    },
    dialogPage: {
      dialogsData: [
        { id: 1, name: "Anton" },
        { id: 2, name: "Vladislav" },
        { id: 3, name: "Alex" },
        { id: 4, name: "Vova" },
        { id: 5, name: "Valentin Gusev" },
      ],

      messagesData: [
        { id: 1, message: "hi" },
        { id: 2, message: "What are you doing now?" },
        { id: 3, message: "Are you want drink?" },
        { id: 4, message: "I'm realy luv u, my darling!" },
      ],
      newMessageBody: "",
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscribe = observer;
  },

  _callSubscribe() {
    console.log("was changed");
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscribe(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscribe(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogPage.newMessageBody = action.body;
      this._callSubscribe(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogPage.newMessageBody;
      this._state.dialogPage.newMessageBody = "";
      this._state.dialogPage.messagesData.push({ id: 5, message: body });
      this._callSubscribe(this.state);
    }
  },
};
export const addPostActionCreator = () => {
  return { type: ADD_POST };
};
export const updateNewPostActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, body: text };
};

window.store = store;
export default store;
