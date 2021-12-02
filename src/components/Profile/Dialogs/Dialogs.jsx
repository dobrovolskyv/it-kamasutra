import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../../redux/state"

const Dialog = (props) => {


    let path = "/dialogs/" + props.id;
    return <NavLink to={path}>{props.name}</NavLink>;
};

const Messages = (props) => {
    return <div>{props.messages}</div>;
};

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.
        map(d => <Dialog name={d.name} id={d.id} />)

    let messagesElements = props.state.messagesData.
        map(m => <Messages messages={m.message} />)

    let newMessageBody = props.state.newMessageBody;


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())

    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__list}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div> <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea> </div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>

                </div>
            </div>


        </div >
    );
};

export default Dialogs;
