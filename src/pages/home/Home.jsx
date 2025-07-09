import "./Home.css"
import TweetRedact from "../../components/tweetRedact/TweetRedact";
import TweetList from "../../components/tweetList/TweetList";

function Home(props){
    const {session,tweets,setTweets} = props;
    const handleTuit = (newTweet) => {
        setTweets([newTweet, ...tweets]);
    };

    return(<>
    
    <section className="home-container">
        {session && <TweetRedact session={session} onTuit={handleTuit}/>}
        <div id="tuits-container">
            <TweetList tweets={tweets}/>
        </div>
        
    </section>
        
    
    </>)

}
export default Home;