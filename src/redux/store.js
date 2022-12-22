import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 15 },
                { id: 2, message: 'Its my first post!', likesCount: 20 },
                { id: 3, message: 'it is an instagram?', likesCount: 11000 },
            ],
            newPostText: 'jopa'

        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Sergio', },
                { id: 2, name: 'Viktorica' },
                { id: 3, name: 'Johnny' },
            ],
            messages: [
                { id: 1, message: 'Privet' },
                { id: 2, message: 'hello there' },
                { id: 3, message: 'Dobriy Vecher' },
            ],
            avatars: [
                { id: 1, avatar: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Anonymous.svg/1481px-Anonymous.svg.png' /> },
                { id: 2, avatar: <img src='https://www.pngplay.com/wp-content/uploads/2/Anonymous-Spy-PNG-HD-Quality.png' /> },
                { id: 3, avatar: <img src='https://img2.freepng.ru/20180329/vsw/kisspng-anonymous-guy-fawkes-mask-clip-art-anonymous-mask-5abcd681f2bb36.1708408715223251219942.jpg' /> },
            ],
            newMessageBody: ''
        },
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //observer - наблюдатель
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;