import { createContext, useContext, useState } from 'react';

export const CommentContext = createContext();

export const CommentProvider = ({ children }) => {

const [text, setText] = useState('');
const [comments, setComments] = useState([]);

const changeText = (data) => {
    setText(data);
};

const changeComments = (data) => {
    setComments(state => ({data, ...state}));
};


    return (
        <CommentContext.Provider value={{text, changeText, changeComments}}>
            {children}
        </CommentContext.Provider>
    );
};

export const useCommentContext = () => {
    const commentState = useContext(CommentContext);

    return commentState;
};