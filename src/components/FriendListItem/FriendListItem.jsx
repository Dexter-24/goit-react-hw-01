import css from "./FrienListItem.module.css"

export default function FrienListItem({ avatar, name, isOnline}) {
    return (
        <div className={css.friendItem}>
            <img src={avatar} alt={name} width="48" />
            <p>{name}</p>
            <p className={isOnline ? css.isOnline : css.isOffline}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    )
}