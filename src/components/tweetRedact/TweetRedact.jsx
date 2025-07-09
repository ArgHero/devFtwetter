import "./TweetRedact.css"
import { useState } from "react";

function TweetRedact(props){
    const {onTuit,session} = props;

    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!text.trim()) return;

        const newTweet = {
        id: crypto.randomUUID(), 
        user: session,
        content: text,
        image: null,
        timestamp: "Ahora"
        };

        onTuit(newTweet);
        setText('');
    }

    return(<>
    <form className="compose-tweet" onSubmit={handleSubmit}>
      <img src={session.avatar} alt="avatar" className="compose-avatar" />
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