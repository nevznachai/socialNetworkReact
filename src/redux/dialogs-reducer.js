const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 4, message: body }]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;