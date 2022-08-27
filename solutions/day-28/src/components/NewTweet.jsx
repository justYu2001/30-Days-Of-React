import { useState } from 'react';
import el from '@master/style-element.react';

import avatar from '@/assets/images/avatar.jpeg';

const Avatar = el.img`
    inline
    w:60
    r:50%

    v:top
`;

const TweetInput = el.textarea`
    bb:2|solid|fade-90
    mt:70 mb:10 
    
    f:18 
    
    outline:none 
    resize:none
`;

const ProgressRing = (props) => {
    const { 
        diameter, 
        background, 
        strokeWidth, 
        strokeColor, 
        percent,
    } = props;

    const circumference = diameter * Math.PI;
    const offset = circumference - percent / 100 * circumference;
    
    return (
        <svg shapeRendering='geometricPrecision' className={`w:${diameter} h:${diameter} ${percent == 0 && "hide"}`}>
            <circle
                strokeWidth={strokeWidth}
                stroke={background}
                fill="transparent"
                r={(diameter / 2) - (strokeWidth * 2)}
                cx={diameter / 2}
                cy={diameter / 2}
            />
            <circle
                className={`
                    stroke-dasharray:${circumference}
                    stroke-dashoffset:${offset} 
                    rotate(-90deg) 
                    transform:50%|50%
                `}
                strokeWidth={strokeWidth}
                stroke={strokeColor}
                fill="transparent"
                strokeLinecap="round"
                r={(diameter / 2) - (strokeWidth * 2)}
                cx={diameter / 2}
                cy={diameter / 2}
            />
        </svg>
    );
};

const TweetButton = el.button`
    p:10|20 
    r:99
    ml:10
    
    bg:cyan-70 
    
    f:white f:bold

    ${({ disabled })=> disabled ? 'opacity:.25' : ''}
`;

const NewTweet = ({ createTweet }) => {
    const [content, setContent] = useState('');

    const handleTweetButtonClick = () => {
        createTweet(content);
        setContent('');
    };
    
    return (
        <div className='p:20 bb:2|solid|fade-90'>
            <Avatar src={avatar} alt='avatar' />
            <TweetInput
                cols="50"
                rows="5"
                placeholder='Tweet about 30 Days Of React ...'
                value={content}
                onChange={(event) => setContent(event.target.value)}
             />
            <div className='flex jc:end ai:center'>
                <ProgressRing
                    diameter={40}
                    background='#f4f4f6'
                    strokeWidth={3}
                    strokeColor='#00b9e9'
                    percent={content.length / 250 * 100}
                />
                <TweetButton 
                    disabled={content === ''}
                    onClick={handleTweetButtonClick}
                >
                    Tweet
                </TweetButton>
            </div>
        </div>
    );
};

export default NewTweet;