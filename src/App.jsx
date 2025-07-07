import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/navBar/NavBar'
import Footer from './components/footer/Footer'
import TweetCard from './components/tweetCard/TweetCard'
import TweetList from './components/tweetList/TweetList'
import TweetRedact from './components/tweetRedact/TweetRedact'


function App() {
  const [tweets, setTweets] = useState([]);

  const handleNewTweet = (newTweet) => {
    setTweets([newTweet, ...tweets]);
  };

  const tuit = {
    id: "twt-001",
    user: {
      name: "Saul Dev",
      handle: "s4uldev",
      avatar: "https://i.pravatar.cc/100?img=12" // avatar simulado
    },
    content: "Estoy creando un clon de Twitter en React 🚀. ¡Cada componente cuenta!",
    image: "", // opcional
    timestamp: "2h",
    liked: false,
    retweeted: false
  };
  const tweetsData = [
  {
    id: "twt-001",
    user: { name: "Saul Dev", handle: "s4uldev", avatar: "https://i.pravatar.cc/100?img=12" },
    content: "Estoy creando un clon de Twitter en React 🚀",
    image: "https://placekitten.com/500/250",
    timestamp: "2h"
  },
  {
    id: "twt-002",
    user: { name: "React Cat", handle: "reactkitten", avatar: "https://i.pravatar.cc/100?img=25" },
    content: "¡Hooks everywhere! useEffect, useState, useContext... 🐾",
    image: null,
    timestamp: "3h"
  }
];

  return (
    <>
      <div className="separador">
      <NavBar />
        <main>
          <TweetRedact onTweet={handleNewTweet} />
          <TweetList tweets={tweets} />
        </main>
      </div>
      <Footer />

    </>
  )
}

export default App
