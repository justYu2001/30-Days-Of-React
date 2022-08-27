import useLocalStorage from '@/hooks/useLocalStorage';
import NewTweet from '@/components/NewTweet';
import TweetList from '@/components/TweetList';


class Tweet {
    constructor(content) {
        this.id = Date.now();

        
        this.createdAt = this.getTimeString();

        this.content = content;
    }

    getTimeString() {
        const timeStringList = (new Date()).toString().split(' ');
        const month = timeStringList[1];
        const date = timeStringList[2];
        const year = timeStringList[3];
        const time = timeStringList[4].slice(0, 5);
        const period = parseInt(time.split(':')[0]) > 12 ? 'pm' : 'am';

        return `${month} ${date}, ${year} ${time} ${period}`;
    }
}

const App = () => {
    const [tweetList, setTweetList] = useLocalStorage('tweetList', []);

    const createTweet = (content) => {
        setTweetList([...tweetList, new Tweet(content)]);
    };

    const editTweet = (id, newContent) => {
        setTweetList(tweetList.map((tweet) => {
            if (tweet.id === id) {
                tweet.content = newContent;
            }

            return tweet;
        }));
    };

    const deleteTweet = (id) => {
        setTweetList(tweetList.filter((tweet) => tweet.id !== id));
    };
    
    return (
        <div className='w:600 h:100vh mx:auto bx:2|solid|fade-90'>
            <NewTweet createTweet={createTweet} />
            <TweetList tweetList={tweetList} editTweet={editTweet} deleteTweet={deleteTweet} />
        </div>
    );
};

export default App;