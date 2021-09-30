import React, { useState, useRef } from 'react'
import { IHandleInputElement } from '../models/IHandleInputElement';

function TodoForm(props:any) {
    const [title, setTitle ] = useState(props.edit ? props.edit.title : '');
    const [content, setContent ] = useState(props.edit ? props.edit.content : '');

    const titleRef = useRef(null);
    const contentRef = useRef(null);

    // useEffect(() => {
    //     titleRef.current.focus();
    //     contentRef.current.focus();
    // })

    const handleChangeTitle = (e:IHandleInputElement) => {
        setTitle(e.target.value);
    };

    const handleChangeContent = (e:IHandleInputElement) => {
        setContent(e.target.value);
    };

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        console.log("handleSubmit entered e",e)
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            title: title,
            content: content,
            isComplete: false,
        });
        setTitle('');
        setContent('');
    };
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (                
                <>
                <input
                    type="text"
                    placeholder="Update Title"
                    value={title}
                    name="text"
                    className="todo-input edit"
                    onChange={handleChangeTitle}
                    ref={titleRef} />

                    <input
                    type="text"
                    placeholder="Content"
                    value={content}
                    name="text"
                    className="todo-input"
                    onChange={handleChangeContent}
                    ref={contentRef} />
                    <br />
                    <button type="submit" className="todo-button edit">
                        Update
                    </button>
                </>
            ):(
                <>
                    <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    name="text"
                    className="todo-input"
                    onChange={handleChangeTitle}
                    ref={titleRef} />

                    <input
                    type="text"
                    placeholder="Content"
                    value={content}
                    name="text"
                    className="todo-input"
                    onChange={handleChangeContent}
                    ref={contentRef} />
                    <br />
                    <button type="submit" className="todo-button">
                        Add Todo
                    </button>
                </>
            )}
        </form>
    )
}

export default TodoForm
