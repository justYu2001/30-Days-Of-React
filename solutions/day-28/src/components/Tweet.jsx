import { useState, useEffect, useRef } from 'react';
import el from '@master/style-element.react';
import { FiEdit } from 'react-icons/fi';
import { MdDeleteOutline } from 'react-icons/md'
import { FaRegComment } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiShare } from 'react-icons/bi';

import avatar from '@/assets/images/avatar.jpeg';

const Avatar = el.img`
    inline
    w:60
    r:50%
`;

const Container = el.li`
    px:20 pt:10 
    bb:2|solid|fade-90 
    
    cursor:pointer:hover

    ${({ editing }) => editing ? '' : 'bg:fade-90:hover'}
`;

const TweetEditor = el.textarea`
    abs 
    top:-5 
    bottom:0 
    left:60 
    right:0

    p:10
    r:5

    bg:fade-90

    resize:none
    outline:none

    ${({ editing }) => editing ? '' : 'hide'}
`;

const Tweet = ({ tweet, editTweet, deleteTweet }) => {
    const tweetEditorRef = useRef(null);

    const handleDeleteButtonClick = () => {
        deleteTweet(tweet.id);
    };

    const [editing, setEditing] = useState(false);

    const handleEditButtonClick = () => {
        setEditing(true);
        tweetEditorRef.current.value = tweet.content;
    };

    useEffect(() => {
        tweetEditorRef.current.focus();
    }, [editing]);

    useEffect(() => {
        const closeTweetEditor = (event) => {
            editTweet(tweet.id, event.target.value);
            setEditing(false);
        };
        
        const tweetEditor = tweetEditorRef.current;

        if (tweetEditor !== null) {
            tweetEditor.addEventListener('blur', closeTweetEditor);
        }

        return () => tweetEditor.removeEventListener('blur', closeTweetEditor);
    }, [tweetEditorRef]);
    
    return (
        <Container editing={editing}>
            <div className='flex ai:center'>
                <Avatar src={avatar} />
                <h3 className='ml:10 mr:4 f:bold'>justYu2001</h3>
                <span className='f:fade-70'>@justYu2001</span>
            </div>
            <p className='rel pl:70 pt:5 pb:10 white-space:pre-wrap'>
                <TweetEditor editing={editing} ref={tweetEditorRef} />
                {tweet.content}
            </p>
            <div className='flex jc:space-between ai:center py:10'>
                <div className='flex ai:center f:cyan-70/.5'>
                    <FiEdit className='mx:5 f:20 f:cyan-70:hover' onClick={handleEditButtonClick} />
                    <MdDeleteOutline className='mx:5 f:24 f:red-60:hover' onClick={handleDeleteButtonClick} />
                </div>
                <div className='flex ai:center f:fade-50'>
                    <FaRegComment className='mx:5 f:20 f:cyan-70:hover' />
                    <AiOutlineHeart className='mx:5 f:24 f:red-60:hover' />
                    <BiShare className='mx:5 f:24 f:cyan-70:hover' />
                </div>
                <p>{tweet.createdAt}</p>
            </div>
        </Container>
    );
};

export default Tweet;