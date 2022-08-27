import React from 'react';
import Tweet from '@/components/Tweet';

const TweetList = ({ tweetList, editTweet, deleteTweet }) => {
    return (
        <ul>
            {tweetList.map((tweet) => (
                <Tweet 
                    key={tweet.id} 
                    tweet={tweet} 
                    editTweet={editTweet} 
                    deleteTweet={deleteTweet}
                />
            ))}
        </ul>
    );
};

export default TweetList;