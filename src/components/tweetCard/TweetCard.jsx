import "./TweetCard.css"
import TweetActions from '../tweetActions/TweetActions'


function TweetCard(props){
    const {tweet} = props;
    const {user,content,image,timestamp}=tweet;

    return(<>
    <article className="tweet-card">
      <img src={user.avatar} alt="avatar" className="tweet-avatar" />

      <div className="tweet-body">
        <div className="tweet-header">
          <span className="name">{user.name}</span>
          <span className="handle">@{user.handle}</span>
          <span className="timestamp">· {timestamp}</span>
        </div>

        <p className="tweet-text">{content}</p>

        {image && <img src={image} alt="tweet media" className="tweet-image" />}

        <TweetActions 
            onReply={() => console.log("Responder")}
            onRetweet={() => console.log("Retuitear")}
            onLike={() => console.log("Me gusta")}
            onShare={() => console.log("Compartir")}
        />

      </div>
    </article>
    
    </>)
}

export default TweetCard;