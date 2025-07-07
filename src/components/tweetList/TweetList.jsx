import "./TweetList.css"
import TweetCard from "../tweetCard/TweetCard";

function TweetList(props){
    const {tweets} = props;

    return(<>
    <section className="tweet-list">
      {tweets.map((tweet) => (
        <TweetCard key={tweet.id} tweet={tweet} />
      ))}
    </section>
    </>)
}//TweetList()

export default TweetList;
