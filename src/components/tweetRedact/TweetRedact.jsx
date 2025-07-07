import "./TweetRedact.css"
import { useState } from "react";

function TweetRedact(props){
    const {onTweet} = props;

    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!text.trim()) return;

        const newTweet = {
        id: crypto.randomUUID(), 
        user: {
            name: "Saul Dev",
            handle: "s4uldev",
            avatar: "https://i.pravatar.cc/100?img=12"
        },
        content: text,
        image: null,
        timestamp: "Ahora"
        };

        onTweet(newTweet);
        setText('');
    }

    return(<>
    <form className="compose-tweet" onSubmit={handleSubmit}>
      <img src="https://i.pravatar.cc/100?img=12" alt="avatar" className="compose-avatar" />
      <textarea 
        type=""
        className="compose-textarea"
        placeholder="¿Qué está pasando?"
        maxLength={280}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <div className="compose-footer">
        <span>{280 - text.length} caracteres</span>
        <button type="submit" disabled={!text.trim()}>
          Tuitear
        </button>
      </div>
    </form>
    </>)
}//TweetRedact()

export default TweetRedact;