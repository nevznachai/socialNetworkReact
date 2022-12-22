import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import Avatar from './Avatar/Avatar';
import React from 'react';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);
    let avatarsElements = state.avatars.map(a => <Avatar avatar={a.avatar} key={a.id} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBodyCreator(body);
    }

    // let newMessageElement = React.createRef();
    // let addMessage = () => {
    //     let text = newMessageElement.current.value;
    //     alert(text);
    // }

    return (
        <div className={s.dialogs}>
            <div 
                className={s.avatarItems}>
                {avatarsElements}
                {props.message}
            </div >
            <div
                className={s.dialogsItems}>
                {dialogsElements}
            </div >
            <div
                className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea>
                    </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                    <button>Remove</button></div>
            </div>
        </div>
    )
}

export default Dialogs;