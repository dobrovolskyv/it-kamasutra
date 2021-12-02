import React from "react";
import Post from "./Post";
import s from "./MyPosts.module.css"
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/state"

const MyPosts = (props) => {




    let postsElements = props.postsData.
        map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />)

    let addPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onChangePost = () => {
        let text = addPostElement.current.value;
        let action = updateNewPostActionCreator(text);
        props.dispatch(action);


    }

    return (
        <div className={s.myposts}>
            My posts
            <div>
                <textarea onChange={onChangePost} ref={addPostElement} value={props.newPostText} />
                <button onClick={addPost}> Add post</button>
            </div>
            <div className={s.postsElements}>
                {postsElements}

            </div>
        </div>
    );
};

export default MyPosts;
