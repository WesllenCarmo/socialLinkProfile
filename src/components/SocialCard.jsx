function SocialCard({avatar, avatarAlt, name, location, carrer}) {
    return (
        <div>
            <img src={avatar} alt={avatarAlt}/>
            <h2>{name}</h2>
            <p>{location}</p>
            <p>{carrer}</p>
            <div>
                <button>GitHub</button>
                <button>Frontend Mentor</button>
                <button>LinkedIn</button>
                <button>Twitter</button>
                <button>instagram</button>
            </div>
        </div>
    )
}
export default SocialCard;