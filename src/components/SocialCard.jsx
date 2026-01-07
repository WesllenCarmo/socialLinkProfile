import styles from './SocialCard.module.css';
function SocialCard({avatar, avatarAlt, name, location, carrer}) {
    return (
        <div className={styles.card}>
            <img src={avatar} alt={avatarAlt} className={styles.profileImage}/>
            <div className={styles.textContainer}>
                <h2 className={styles.profileName}>{name}</h2>
                <p className={styles.location}>{location}</p>
                <p className={styles.carrer}>"{carrer}"</p>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.button}>GitHub</button>
                <button className={styles.button}>Frontend Mentor</button>
                <button className={styles.button}>LinkedIn</button>
                <button className={styles.button}>Twitter</button>
                <button className={styles.button}>instagram</button>
            </div>
        </div>
    )
}
export default SocialCard;