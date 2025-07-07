import "./TweetActions.css"

function TweetActions(props){
    const {onReply, onRetweet, onLike, onShare} = props;

    return(<>
    <div className="tweet-actions">
      <button title="Responder" onClick={onReply}>💬</button>
      <button title="Retuitear" onClick={onRetweet}>🔁</button>
      <button title="Me gusta" onClick={onLike}>❤️</button>
      <button title="Compartir" onClick={onShare}>📤</button>
    </div>
    </>)
}

export default TweetActions;
