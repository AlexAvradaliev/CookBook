import { createContext, useContext, useState } from 'react';

export const CommentContext = createContext();

export const CommentProvider = ({ children }) => {

const [text, setText] = useState('');
const [comments, setComments] = useState([]);
const [update, setUpdate] = useState(null)

const changeUpdate = (data) => {
    setUpdate(data)
};

const changeText = (data) => {
    setText(data);
};

const changeComments = (data) => {
    setComments(state => ([data, ...state]));
};

const addComments = (data) => {
    setComments(data);
};


    return (
        <CommentContext.Provider value={{update, changeUpdate, text, comments, changeText, changeComments, addComments}}>
            {children}
        </CommentContext.Provider>
    );
};

export const useCommentContext = () => {
    const commentState = useContext(CommentContext);

    return commentState;
};