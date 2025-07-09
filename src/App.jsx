import { useState,useEffect } from 'react'
import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/navBar/NavBar'
import Footer from './components/footer/Footer'

import Login from './pages/login/Login'
import Perfil from './pages/perfil/Perfil'
import RutaProtegida from './components/rutaProtegida/RutaProtegida'
import Home from './pages/home/Home'


function App() {
  const tweetsData = JSON.parse(localStorage.getItem("tuits"))||[
  {
    id: "twt-101",
    user: {
      name: "Naruto Uzumaki",
      handle: "dattebayo",
      avatar: "https://i.pinimg.com/736x/78/df/14/78df145e9ab3a732f1b438255a1eaa3a.jpg"
    },
    content: "¡Nunca retrocedas! 🌀 Hoy entrené hasta caer... y luego me levanté otra vez.",
    image: null,
    timestamp: "1h"
  },
  {
    id: "twt-102",
    user: {
      name: "Luffy D. Monkey",
      handle: "gomuGomu",
      avatar: "https://i.pinimg.com/736x/9f/6f/20/9f6f20d0a83970abec6fdda7148902c5.jpg"
    },
    content: "Quiero ser el Rey de los Piratas ☠️ No me importa cuán loco suene.",
    image: "https://i.pinimg.com/736x/8a/40/df/8a40df83aac31d45c34bd11b91c4e073.jpg",
    timestamp: "2h"
  },
  {
    id: "twt-103",
    user: {
      name: "Sailor Moon",
      handle: "moonPrism",
      avatar: "https://i.pinimg.com/736x/2e/e6/3e/2ee63e7d64db18f4494d62782c9131af.jpg"
    },
    content: "¡Por el poder del prisma lunar! 🌙✨ Hoy brillamos más fuerte que ayer.",
    image: null,
    timestamp: "30m"
  }
  ]

  const [session, setSession] = useState(null)

  const [tweets, setTweets] = useState(tweetsData);

  const handleLogin = (login)=>{
    let isLogged = false
    const user = login.user
    const pass = login.password
    if(user==="a"&&pass==="b"){
      setSession({
        name: "Saul Dev",
        handle: "s4uldev",
        avatar: "https://i.pinimg.com/736x/01/c2/09/01c209e18fd7a17c9c5dcc7a4e03db0e.jpg" 
      })
      isLogged= true;
    }
    return isLogged
  }

  useEffect(()=>{
    localStorage.setItem("tuits",JSON.stringify(tweets))
  },[tweets])

  return (
    <>
      <div className="separador">
      <NavBar session={session} setSession={setSession} />
        <main>
          <Routes>
            <Route path='/' element={<Home session={session} tweets={tweets} setTweets={setTweets}/>}/>
            <Route path='/login' element={<Login handleLogin={handleLogin} />}/>
            <Route path='/usuario' element={<RutaProtegida auth={session} children={<Perfil session={session} />}/>}/>
            <Route path='*' element={<p>Esta página no existe</p>}/>

            


          </Routes>      
        </main>
      </div>
      <Footer />

    </>
  )
}

export default App
