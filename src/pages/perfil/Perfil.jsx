import "./Perfil.css"
import { useNavigate } from "react-router-dom";

function Perfil(props){
    const {session} = props;
    // const navigate = useNavigate();
    // if(!session)
    //     navigate("/")
    const defaultUser = {
        name: "Juan Pérez",
        handle: "juanperez",
        bio: "Desarrollador fullstack. Amante de las monas chinas ☕ y el joncai.",
        location: "Ciudad de México",
        avatar: "https://i.pravatar.cc/150?u=juanperez",
        tweets: 358,
        followers: 1200,
        following: 215
    }

    const userData = {
        ...defaultUser,
        name: session.name,
        handle: session.handle,
        avatar: session.avatar 
    };

    return(<>
    <section className="profile-container">
        <div className="profile-header">
            <img
            className="avatar"
            src={userData.avatar}
            alt={`${userData.name} avatar`}
            />
            <div className="user-info">
            <h2>{userData.name}</h2>
            <p className="username">@{userData.handle}</p>
            <p className="bio">{userData.bio}</p>
            <p className="location">📍 {userData.location}</p>
            </div>
        </div>
        <div className="profile-stats">
            <div><strong>{userData.tweets}</strong> Tweets</div>
            <div><strong>{userData.followers}</strong> Seguidores</div>
            <div><strong>{userData.following}</strong> Siguiendo</div>
        </div>
    </section>
    
    </>)

}

export default Perfil;